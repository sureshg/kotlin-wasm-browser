import com.github.ajalt.mordant.rendering.TextColors
import com.google.cloud.tools.jib.gradle.extension.nativeimage.JibNativeImageExtension
import common.githubUser
import org.gradle.internal.os.OperatingSystem
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinNativeLink

plugins {
  plugins.kotlin.mpp
  plugins.publishing
  com.google.cloud.tools.jib
}

description = "Ktor native application"

kotlin {
  targets.filterIsInstance<KotlinNativeTarget>().forEach {
    it.binaries { executable(listOf(RELEASE)) { entryPoint = "main" } }
    it.compilations.configureEach {
      compilerOptions.configure { freeCompilerArgs.add("-Xallocator=custom") }
    }
  }

  applyDefaultHierarchyTemplate()

  sourceSets {
    commonMain { dependencies { api(projects.common) } }
    // nativeMain { dependencies { api(libs.arrow.suspendapp.ktor) } }
  }
}

jib {
  from {
    image = "debian:stable-slim"
    platforms {
      platform {
        architecture = "amd64"
        os = "linux"
      }
      // platform {
      //   architecture = "arm64"
      //   os = "linux"
      // }
    }
  }

  to {
    image = "${project.githubUser}/${project.name}"
    tags = setOf("latest")
  }

  pluginExtensions {
    pluginExtension {
      implementation = JibNativeImageExtension::class.qualifiedName
      properties = mapOf("imageName" to "app")
    }
  }
  container { mainClass = "MainKt" }
}

// Workaround for Jib
sourceSets.maybeCreate("main")

tasks {
  val linkReleaseExecutableLinuxX64 by getting(KotlinNativeLink::class)
  val linkReleaseExecutableMacosX64 by getting(KotlinNativeLink::class)
  val linkReleaseExecutableMacosArm64 by getting(KotlinNativeLink::class)

  val macOsUniversalBinary by
      creating(Exec::class) {
        val binName = "${project.name}-macos"
        dependsOn(linkReleaseExecutableMacosX64, linkReleaseExecutableMacosArm64)
        commandLine(
            "lipo",
            "-create",
            "-output",
            binName,
            linkReleaseExecutableMacosX64.binary.outputFile,
            linkReleaseExecutableMacosArm64.binary.outputFile)
        workingDir = layout.buildDirectory.dir("bin").get().asFile
        group = "Build"
        description = "Builds universal macOS binary"

        doLast {
          logger.lifecycle(
              TextColors.cyan(
                  "Universal macOS binary created: ${workingDir.resolve(binName).absolutePath}"))
        }

        onlyIf { OperatingSystem.current().isMacOsX }
      }

  val prepareJib by
      registering(Copy::class) {
        from(linkReleaseExecutableLinuxX64)
        // Jib native image extension expects the native image to be in "native/nativeCompile"
        into(layout.buildDirectory.dir("native/nativeCompile"))
        rename { "app" }
      }

  jibDockerBuild { dependsOn(prepareJib) }

  // publish { finalizedBy(jibDockerBuild) }
}

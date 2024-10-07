import common.jvmRunArgs

plugins {
  application
  com.gradleup.shadow
  plugins.kotlin.mpp
  plugins.publishing
  alias(libs.plugins.kotlin.compose.compiler)
  // alias(libs.plugins.detekt)
}

description = "Compose mosaic CLI app!"

kotlin {
  sourceSets {
    commonMain.dependencies {
      implementation(projects.shared)
      implementation(libs.mosaic.runtime)
    }
  }
}

application {
  mainClass = libs.versions.app.mainclass.get()
  applicationDefaultJvmArgs += project.jvmRunArgs
}

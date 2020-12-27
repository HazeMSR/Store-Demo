name := "store"

version := "0.1"

scalaVersion := "2.13.4"

idePackagePrefix := Some("com.enroutesystems.hazelstore")


val akkaVersion = "2.6.8"
val akkaHttpVersion = "10.2.2"
val scalaTestVersion = "3.2.2"
val circeVersion = "0.12.3"
val akkaHttpJsonSerializersVersion = "1.35.2"
val mongodbDriverVersion = "4.1.1"
val alpakkaVersion = "2.0.2"

libraryDependencies += "org.scalactic" %% "scalactic" % scalaTestVersion
libraryDependencies += "org.scalatest" %% "scalatest" % scalaTestVersion
libraryDependencies += "org.scalatest" %% "scalatest" % "test" % scalaTestVersion

libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.2.3"
//libraryDependencies +=

libraryDependencies ++= Seq(
  // akka streams
  "com.typesafe.akka" %% "akka-stream" % akkaVersion,


  // akka http
  "com.typesafe.akka" %% "akka-http" % akkaHttpVersion,
  "com.typesafe.akka" %% "akka-http-spray-json" % akkaHttpVersion,
  "com.typesafe.akka" %% "akka-http-testkit" % akkaHttpVersion,

  // akka
  "com.typesafe.akka" %% "akka-testkit" % akkaVersion,
  "com.typesafe.akka" %% "akka-actor-typed" % akkaVersion,

  // logging
  "org.apache.logging.log4j" % "log4j-api" % "2.4.1",
  "org.apache.logging.log4j" % "log4j-core" % "2.4.1",

  // DB
  "org.mongodb.scala" %% "mongo-scala-driver" % mongodbDriverVersion,
  "org.mongodb.scala" %% "mongo-scala-bson" % mongodbDriverVersion,
  "com.lightbend.akka" %% "akka-stream-alpakka-mongodb" % alpakkaVersion,
  "com.lightbend.akka" %% "akka-stream-alpakka-dynamodb" % alpakkaVersion
)

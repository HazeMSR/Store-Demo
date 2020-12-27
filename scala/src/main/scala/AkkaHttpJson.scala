package com.enroutesystems.hazelstore

import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.Behaviors
import akka.http.scaladsl.Http
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import akka.http.scaladsl.server.Route
import akka.http.scaladsl.server.Directives._

import java.util.UUID


import org.bson.codecs.configuration.CodecRegistries.{fromProviders, fromRegistries}

import org.mongodb.scala.bson.codecs.Macros._
import org.mongodb.scala.bson.codecs.macrocodecs.MacroCodec

// step 1
import spray.json._

case class Person(name: String, age: Int)
case class UserAdded(id: String, timestamp: Long)

// step 2
trait PersonJsonProtocol extends DefaultJsonProtocol {
  implicit val personFormat = jsonFormat2(Person)
  implicit val userAddedFormat = jsonFormat2(UserAdded)
}

// step 3
object AkkaHttpJson extends PersonJsonProtocol with SprayJsonSupport {
  val codecRegistry = fromRegistries(fromProviders(classOf[Number]),)

  implicit val system = ActorSystem(Behaviors.empty, "AkkaHttpJson")

  val route: Route = (path("api" / "user") & post) {
    entity(as[Person]) { person: Person =>
      complete(UserAdded(UUID.randomUUID().toString, System.currentTimeMillis()))
    }
  }

  def main(args: Array[String]): Unit = {
    Http().newServerAt("localhost", 5000).bind(route)
  }
}

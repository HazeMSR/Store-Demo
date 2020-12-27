package com.enroutesystems.hazelstore
import akka.NotUsed
import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.stream.alpakka.mongodb.scaladsl.{MongoSink, MongoSource}
import akka.stream.scaladsl.{Sink, Source}
import com.mongodb.reactivestreams.client.MongoClients
import org.bson.codecs.configuration.CodecRegistries.{fromProviders, fromRegistries}
import org.mongodb.scala.bson.codecs.Macros._
import org.mongodb.scala.bson.codecs.macrocodecs.MacroCodec

import scala.concurrent.Future

case class Item( _id: String,
                  name: String,
                  price: Float,
                  stock: Int,
                  description: String,
                  image: String)

case object Server{
  val codecRegistry = fromRegistries(fromProviders(classOf[Item]))

  private val client = MongoClients.create("mongodb+srv://hazemsr:Hola1234@cluster0.6ive1.mongodb.net/store?retryWrites=true&w=majority")
  private val db = client.getDatabase("store")
  private val numbersColl = db
    .getCollection("items", classOf[Item])
    .withCodecRegistry(codecRegistry)
  implicit val system = ActorSystem()
  implicit val mat = ActorMaterializer()

  val source: Source[Number, NotUsed] =
    MongoSource(numbersColl.find(classOf[Number]))

  val rows: Future[Seq[Number]] = source.runWith(Sink.seq)

  val testRangeObjects = tr.map(Item("1m","name",15.99F,10,"desc",""))
  val source = Source(testRangeObjects)
  source.runWith(MongoSink.insertOne(numbersColl)).futureValue
}

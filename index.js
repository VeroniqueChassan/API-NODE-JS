const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL =
  "mongodb+srv://veronique-c:5qqEIbcML920VD43@cluster0.ltzplr1.mongodb.net/test";
const databaseName = "rest-api";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    console.log("connected correctly");
  }
);

console.log("hello world");
//test something

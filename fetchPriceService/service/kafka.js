import "dotenv/config";
import { Kafka } from "kafkajs";

// const { Kafka } = require("kafkajs");

const { USERNAME: username, PASSWORD: password } = process.env;
const sasl =
  username && password ? { username, password, mechanism: "plain" } : null;
const ssl = !!sasl;

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
// Kafka.Kafka

const kafka = new Kafka({
  clientId: "mockstock-client-fetchprice-2",
  brokers: [process.env.BOOTSTRAP_SERVER],
  ssl,
  sasl,
});

export default kafka;

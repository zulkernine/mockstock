import kafka from "./service/kafka.js";

export default async () => {
  console.log("hello world");

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "LiveStockQuotes",
    messages: [
      {
        value: JSON.stringify({ price: 53423, symbol: "IMA" }),
        key: "TCS",
      },
      {
        value: JSON.stringify({ price: 83, symbol: "asdf" }),
        key: "HCL",
      },
    ],
  });

  await producer.disconnect();
};


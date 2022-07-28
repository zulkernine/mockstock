import EventNames from "../../EVENTS.json" assert { type: "json" };

async function consume(kafka, io) {
  const consumer = kafka.consumer({ groupId: "live-consumer-2" });
  await consumer.subscribe({
    topics: ["LiveStockQuotes2"],
    fromBeginning: true,
  });

  let count = 0;

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        
      io.emit(EventNames.liveQuotes, (message.value.toString()));

      console.log("batch count: "+count);
      count++;

    //   console.log({
    //     // key: message.key.toString(),
    //     symbol: JSON.parse(message.value.toString())[0].symbol,
    //     price: JSON.parse()[0].regularMarketPrice,
    //     // headers: message.headers,
    //   });
    },
  });
}

export default consume;

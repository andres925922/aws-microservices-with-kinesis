import type { KinesisStreamHandler, KinesisStreamEvent } from "aws-lambda";

export const handler: KinesisStreamHandler = async (event: KinesisStreamEvent) => {
  return {
    batchItemFailures: event.Records.map((record) => ({
      itemIdentifier: record.eventID,
    })),
  };
};

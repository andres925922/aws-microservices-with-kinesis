import type { SQSHandler, SQSEvent } from "aws-lambda";

export const handler: SQSHandler = async (event: SQSEvent) => {
  return {
    batchItemFailures: event.Records.map((record) => ({
      itemIdentifier: record.messageId,
    })),
  }
};

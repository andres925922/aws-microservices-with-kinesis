import type { APIGatewayProxyResult, APIGatewayEvent, APIGatewayEventRequestContextV2 } from "aws-lambda";

const handler = async (event: APIGatewayEvent, context: APIGatewayEventRequestContextV2): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
}

export { handler };
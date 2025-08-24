// TODO
// Improve with-mcp and afterwards, test this MCP with Task API as MCP tool. Make a recipe for that and a blogpost

import { withMcp } from "with-mcp";
import { withSimplerAuth } from "simplerauth-client";
import openapi from "./openapi.json";
export default {
  fetch: withMcp(
    undefined,
    openapi,

    {
      // Should be specified here. should be able to be a live URL too instead.
      openapi,
      // handler shouldn't be needed. we can just proxy to the first server url directly
      // value could be 'proxy', 'handler', or
      handler: "proxy",
      //undefined should take all of them as tools
      toolOperationIds: undefined,
      // this should be a GET endpoint to the api that will return 401 incase api key isn't correct
      authEndpoint: undefined,
    }
  ),
};

"use strict";

const { App } = require("uWebSockets.js");
const { createRouter, useAjv } = require("fets");

const router = createRouter({
  plugins: [useAjv()],
}).route({
  method: "GET",
  path: "/",
  schemas: {
    responses: {
      200: {
        type: "object",
        properties: {
          hello: {
            type: "string",
          },
        },
      },
    },
  },
  handler: () => Response.json({ hello: "world" }),
});

App().get("/*", router).listen("127.0.0.1", 3000);

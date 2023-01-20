"use strict";

const HyperExpress = require("hyper-express");
const app = new HyperExpress.Server();

app.get("/", (_, response) => {
	response.json({ hello: "world" });
});

app.listen(3000);

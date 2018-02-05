import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import api from "./api";
import config from "./config.json";

const app = express();
app.server = http.createServer(app);
app.listen(config.port, () =>
	console.log(`Example app listening on port ${config.port}!`)
);

// logger
app.use(morgan("dev"));

// 3rd party middleware
app.use(
	cors({
		exposedHeaders: config.corsHeaders
	})
);

app.use(
	bodyParser.json({
		limit: config.bodyLimit
	})
);

app.use("/api", api({ config }));

export default app;

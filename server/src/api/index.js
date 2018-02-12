import { Router } from "express";
import events from "./events";

export default ({ config }) => {
	const api = Router();

	// mount the events resource
	api.use("/events", events({ config }));

	// perhaps expose some API metadata at the root
	api.get("/", (req, res) => {
		res.json({ info: "It's root of yout API" });
	});

	return api;
};

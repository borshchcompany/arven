import resource from "resource-router-middleware";
import Event from "../models/Event";

const events = [];

export default ({ config }) =>
	resource({
		/** Property name to store preloaded entity on `request`. */
		id: "event",

		/** GET / - List all entities */
		async index({ params }, res) {
			const events = await Event.all();
			res.json(events);
		}
	});

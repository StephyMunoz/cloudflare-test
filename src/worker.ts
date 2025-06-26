import { default as handler } from "../.vercel/output/static/_worker.js/index.js";

export default {
	fetch: handler.fetch,
};

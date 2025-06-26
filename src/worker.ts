export default {
	fetch: async (request: Request, env: any, ctx: any) => {
		return new Response("Hello from Cloudflare Worker!");
	}
};

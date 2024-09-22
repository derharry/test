const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ChgwYk4n.js","app":"_app/immutable/entry/app.ByqRgHxK.js","imports":["_app/immutable/entry/start.ChgwYk4n.js","_app/immutable/chunks/entry.C6g5XbfP.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.ByqRgHxK.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DFTQtrJW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-jN6XVsti.js')),
			__memo(() => import('./chunks/1-Tj7iBLfv.js')),
			__memo(() => import('./chunks/2-YL0ImcZZ.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

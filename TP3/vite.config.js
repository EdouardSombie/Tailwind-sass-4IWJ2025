import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		minify: false,
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					if (/\.css$/.test(assetInfo.names[0])) {
						return "css/[name][extname]";
					}
					return "assets/[name][extname]";
				},
			},
		},
	},
});

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
						return "images/[name][extname]";
					}
					if (/\.css$/.test(name ?? "")) {
						return "css/[name][extname]";
					}
					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},
});

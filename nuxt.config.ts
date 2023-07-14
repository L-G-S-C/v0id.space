import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		'~scss_components': fileURLToPath(new URL('./assets/scss/components', import.meta.url)),
		'~scss_assets':     fileURLToPath(new URL('./assets/scss/assets'    , import.meta.url)),
		'~images':          fileURLToPath(new URL('./assets/IMG'            , import.meta.url)),
	},
	modules: [
		'@nuxt/image-edge',
		'@vueuse/nuxt'
	],
	css: [
		'@/assets/scss/assets/main.scss',
		'@fortawesome/fontawesome-svg-core/styles.css'
	],
	app: {
		head: {
			meta: [
				{ charset: 'utf-8' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap' }
			]
		},
		baseURL: '/v0id.space/'
	},
	generate: {
	},
	ssr: true,
})

import {
	createHashRouter,
	createPanel,
	createRoot,
	createView,
	RoutesConfig,
} from '@vkontakte/vk-mini-apps-router'

export const DEFAULT_ROOT = 'default_root'

export const DEFAULT_VIEW = 'default_view'

export const DEFAULT_VIEW_PANELS = {
	HOME_PAGE: 'home_page',
	NEWS_PAGE: 'news_page',
} as const

export const routes = RoutesConfig.create([
	createRoot(DEFAULT_ROOT, [
		createView(DEFAULT_VIEW, [
			createPanel(DEFAULT_VIEW_PANELS.HOME_PAGE, '/', []),
			createPanel(
				DEFAULT_VIEW_PANELS.NEWS_PAGE,
				`/${DEFAULT_VIEW_PANELS.NEWS_PAGE}`,
				[]
			),
		]),
	]),
])

export const router = createHashRouter(routes.getRoutes())

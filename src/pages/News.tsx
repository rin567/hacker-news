import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import {
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
} from '@vkontakte/vkui'
import { FC } from 'react'

export const News: FC<NavIdProps> = ({ id }) => {
	const routeNavigator = useRouteNavigator()

	return (
		<Panel id={id}>
			<PanelHeader
				before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
			>
				Persik
			</PanelHeader>
		</Panel>
	)
}

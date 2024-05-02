import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import {
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderBack,
} from '@vkontakte/vkui'
import { FC } from 'react'
import { NewsItemDetails } from '../entities'
import { CommentsList } from '../widgets'

export const News: FC<NavIdProps> = ({ id }) => {
	const routeNavigator = useRouteNavigator()

	return (
		<Panel id={id}>
			<PanelHeader
				before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
			>
				Hacker News
			</PanelHeader>
			<NewsItemDetails></NewsItemDetails>
			<CommentsList></CommentsList>
		</Panel>
	)
}

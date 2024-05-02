import { Icon24RefreshOutline, Icon28RefreshOutline } from '@vkontakte/icons'
import {
	AdaptiveIconRenderer,
	NavIdProps,
	Panel,
	PanelHeader,
	PanelHeaderButton,
	PanelSpinner,
} from '@vkontakte/vkui'
import { FC, useEffect } from 'react'
import { hackerNewsApi } from '../shared/api/hackerNews.api'
import { NewsList } from '../widgets'

export const Home: FC<NavIdProps> = ({ id }) => {
	const { refetch } =
		hackerNewsApi.endpoints.getNewsList.useQuerySubscription(null)
	const { isLoading, data } =
		hackerNewsApi.endpoints.getNewsList.useQueryState(null)
	const newsList = data?.slice(0, 100) || []
	useEffect(() => {
		const timerID = setInterval(() => refetch(), 60000)
		return () => clearInterval(timerID)
	})
	return (
		<Panel id={id}>
			<PanelHeader
				before={
					<PanelHeaderButton onClick={refetch}>
						<AdaptiveIconRenderer
							IconCompact={Icon24RefreshOutline}
							IconRegular={Icon28RefreshOutline}
						/>
					</PanelHeaderButton>
				}
			>
				Hacker News
			</PanelHeader>

			{isLoading ? (
				<PanelSpinner size='large'>Loading...</PanelSpinner>
			) : (
				<NewsList newsList={newsList} />
			)}
		</Panel>
	)
}

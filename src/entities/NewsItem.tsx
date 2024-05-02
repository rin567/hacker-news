import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import { ContentCard } from '@vkontakte/vkui'
import { FC } from 'react'
import { changeSelectedNews } from '../app/selectedNewsSlice'
import { timeTransform } from '../features'
import { useGetItemQuery } from '../shared/api/hackerNews.api'
import { useAppDispatch } from '../shared/hooks'

interface INewsItemProps {
	key: number
	id: number
}

export const NewsItem: FC<INewsItemProps> = ({ id }) => {
	const { data } = useGetItemQuery(id)
	const routeNavigator = useRouteNavigator()
	const dispatch = useAppDispatch()
	const date = timeTransform(data?.time || null)

	return (
		<ContentCard
			onClick={() => {
				dispatch(changeSelectedNews(data || null))
				routeNavigator.push('news_page')
			}}
			header={data?.title}
			subtitle={`by ${data?.by} ${date}`}
			caption={`Score: ${data?.score}`}
		/>
	)
}

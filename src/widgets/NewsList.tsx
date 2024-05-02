import { CardGrid } from '@vkontakte/vkui'
import { FC } from 'react'
import { NewsItem } from '../entities'

interface INewsListProps {
	newsList: number[]
}

export const NewsList: FC<INewsListProps> = ({ newsList }) => {
	return (
		<CardGrid size='l'>
			{newsList?.map((id: number) => {
				return <NewsItem id={id} key={id} />
			})}
		</CardGrid>
	)
}

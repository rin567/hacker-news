import { Card, ContentCard, Group, Link } from '@vkontakte/vkui'
import { RootState } from '../app/store'
import { timeTransform } from '../features'
import { useAppSelector } from '../shared/hooks'

export const NewsItemDetails = () => {
	const news = useAppSelector((state: RootState) => state.selectedNews.news)
	const date = timeTransform(news?.time || null)
	return (
		<Group mode='plain'>
			<Card>
				<ContentCard
					header={news?.title}
					subtitle={`by ${news?.by} ${date}`}
					text={
						<Link href={`${news?.url}`} target='_blank'>
							{news?.url}
						</Link>
					}
				/>
			</Card>
		</Group>
	)
}

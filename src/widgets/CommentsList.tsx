import { CardGrid, Group, Header } from '@vkontakte/vkui'
import { RootState } from '../app/store'
import { Comment } from '../entities'
import { useAppSelector } from '../shared/hooks'

export const CommentsList = () => {
	const news = useAppSelector((state: RootState) => state.selectedNews.news)
	const count = news?.descendants
	const comments = news?.kids

	return (
		<Group
			mode='plain'
			header={
				<Header mode='secondary'>
					{count
						? count === 1
							? `${count} comment`
							: `${count} comments`
						: 'no comments'}
				</Header>
			}
		>
			<CardGrid size='l'>
				{count
					? comments?.map((id: number) => {
							return <Comment id={id} key={id} />
					  })
					: ''}
			</CardGrid>
		</Group>
	)
}

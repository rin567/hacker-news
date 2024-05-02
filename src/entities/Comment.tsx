import { ContentCard } from '@vkontakte/vkui'
import { FC } from 'react'
import { timeTransform } from '../features'
import { useGetItemQuery } from '../shared/api/hackerNews.api'

interface ICommentProps {
	key: number
	id: number
}

export const Comment: FC<ICommentProps> = ({ id }) => {
	const { data } = useGetItemQuery(id)
	const comment = data?.text
	const date = timeTransform(data?.time || null)

	function render(comment: string) {
		return <div dangerouslySetInnerHTML={{ __html: comment }} />
	}

	return (
		<ContentCard
			text={render(String(comment))}
			subtitle={`by ${data?.by} ${date}`}
		/>
	)
}

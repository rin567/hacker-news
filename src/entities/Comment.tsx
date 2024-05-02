import { ContentCard, PanelSpinner } from '@vkontakte/vkui'
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

	if (!data) {
		return <PanelSpinner size='large'>Loading...</PanelSpinner>
	}

	if (data?.deleted) {
		return <ContentCard text='< comment deleted >' subtitle={`${date}`} />
	}

	return (
		<ContentCard
			text={render(String(comment))}
			subtitle={`by ${data?.by} ${date}`}
		/>
	)
}

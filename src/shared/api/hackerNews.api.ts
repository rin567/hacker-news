import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { IItem } from '../types'

const staggeredBaseQuery = retry(
	fetchBaseQuery({
		baseUrl: 'https://hacker-news.firebaseio.com/v0/',
	}),
	{ maxRetries: 5 }
)

export const hackerNewsApi = createApi({
	reducerPath: 'news',
	baseQuery: staggeredBaseQuery,
	endpoints: builder => ({
		getNewsList: builder.query<Array<number>, null>({
			query: () => 'newstories.json',
		}),
		getItem: builder.query<IItem, number>({
			query: (id: number) => ({
				url: `item/${id}.json`,
			}),
			transformResponse: (response: IItem) => {
				if (!response) {
					throw new Error('bad response')
				}
				return response
			},
		}),
	}),
})
export const { useGetNewsListQuery, useGetItemQuery } = hackerNewsApi

import { configureStore } from '@reduxjs/toolkit'
import { hackerNewsApi } from '../shared/api/hackerNews.api'
import selectedNewsReducer from './selectedNewsSlice'

export const store = configureStore({
	reducer: {
		[hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
		selectedNews: selectedNewsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(hackerNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

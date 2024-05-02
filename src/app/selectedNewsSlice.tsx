import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IItem } from '../shared/types'

interface ISelectedNews {
	news: IItem | null
}

const initialState: ISelectedNews = {
	news: null,
}

export const selectedNewsSlice = createSlice({
	name: 'selectedNews',
	initialState,
	reducers: {
		changeSelectedNews: (state, action: PayloadAction<IItem | null>) => {
			state.news = action.payload
		},
	},
})

export const { changeSelectedNews } = selectedNewsSlice.actions

export default selectedNewsSlice.reducer

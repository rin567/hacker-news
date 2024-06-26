export interface IItem {
	by: string
	descendants?: number
	id: number
	kids?: Array<number>
	score?: number
	time: number
	title?: string
	type: string
	url?: string
	parent?: number
	text?: string
	deleted?: boolean
}

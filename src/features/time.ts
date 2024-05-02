export function timeTransform(timestamp: number | null) {
	if (timestamp) {
		const date = new Date(timestamp * 1000)
		const hours = date.getHours()
		const minutes = date.getMinutes()
		return `${('0' + date.getDay()).substring(-2)}.${(
			'0' + date.getMonth()
		).substring(-2)}.${date.getFullYear()} ${hours}:${minutes}`
	}
}

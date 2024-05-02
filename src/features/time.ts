export function timeTransform(timestamp: number | null) {
	if (timestamp) {
		const date = new Date(timestamp * 1000)
		const hours = ('0' + date.getHours()).substring(-2)
		const minutes = ('0' + date.getMinutes()).substring(-2)
		return `${('0' + date.getDay()).substring(-2)}.${(
			'0' + date.getMonth()
		).substring(-2)}.${date.getFullYear()} ${hours}:${minutes}`
	}
}

export function timeTransform(timestamp: number | null) {
	if (timestamp) {
		const date = new Date(timestamp * 1000)
		const hours = ('0' + date.getHours()).slice(-2)
		const minutes = ('0' + date.getMinutes()).slice(-2)
		return `${('0' + date.getDay()).slice(-2)}.${('0' + date.getMonth()).slice(
			-2
		)}.${date.getFullYear()} ${hours}:${minutes}`
	}
}

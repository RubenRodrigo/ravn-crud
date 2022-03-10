import { useEffect, useRef } from "react"

export const useGridCols = (rows: number) => {
	const gridContainerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (gridContainerRef.current) {
			gridContainerRef.current.style.gridTemplateColumns = `repeat(${rows},minmax(0,1fr))`
		}
	}, [rows])

	return gridContainerRef
}
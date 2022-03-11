import { useEffect, useRef } from "react"

export const useGridCols = (columns: number) => {
	const gridContainerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (gridContainerRef.current) {
			gridContainerRef.current.style.gridTemplateColumns = `repeat(${columns},minmax(280px,350px))`
			gridContainerRef.current.style.gridAutoColumns = `minmax(280px,350px)`
		}
	}, [columns])

	return gridContainerRef
}
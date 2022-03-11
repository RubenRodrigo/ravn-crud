import { useEffect, useRef } from "react"

/**
 * This hook is not being used
 */
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
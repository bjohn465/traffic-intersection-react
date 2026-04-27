import { useState } from 'react'
import { Intersection } from './Intersection'
import { states } from './IntersectionState'

export default function App() {
	const [currentStateIndex, setCurrentStateIndex] = useState(0)
	const state = states[currentStateIndex]
	const handleChangeStateClick = () =>
		setCurrentStateIndex((previousIndex) => (previousIndex + 1) % states.length)

	return (
		<>
			<Intersection state={state} />
			<button type="button" onClick={handleChangeStateClick}>
				Change State
			</button>
		</>
	)
}

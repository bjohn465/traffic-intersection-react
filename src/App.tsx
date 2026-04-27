import { useState, useMemo } from 'react'
import { Intersection } from './Intersection'
import { IntersectionStateMachine } from './IntersectionStateMachine'

export default function App() {
	const machine = useMemo(() => new IntersectionStateMachine(), [])
	const [state, setState] = useState(() => machine.getState())

	const handleChangeStateClick = () => {
		machine.next()
		setState(machine.getState())
	}

	return (
		<>
			<Intersection state={state} />
			<button type="button" onClick={handleChangeStateClick}>
				Change State
			</button>
		</>
	)
}

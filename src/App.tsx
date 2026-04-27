import { useState, useMemo, useEffect } from 'react'
import { Intersection } from './Intersection'
import { IntersectionStateMachine } from './IntersectionStateMachine'

export default function App() {
	const machine = useMemo(() => new IntersectionStateMachine(), [])
	const [state, setState] = useState(() => machine.getState())

	useEffect(() => {
		let lastTime = performance.now()
		let frameId: number

		const tick = (now: number) => {
			const deltaTime = now - lastTime
			lastTime = now

			// Update the machine. It returns true if the lights changed color.
			const hasChanged = machine.update(deltaTime)
			if (hasChanged) {
				setState(machine.getState())
			}

			frameId = requestAnimationFrame(tick)
		}

		frameId = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(frameId)
	}, [machine])

	return <Intersection state={state} />
}

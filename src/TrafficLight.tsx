import { TrafficLightButton } from './TrafficLightButton'
import { type TrafficLightState } from './TrafficLightStates'

/**
 * Renders a traffic light using a `TrafficLightButton`,
 * so it must be rendered within a `TrafficLightButtonTooltipProvider`.
 *
 * @example
 * ```tsx
 * // Within a `TrafficLightButtonTooltipProvider` element:
 * <TrafficLight
 * 	label="Northbound Lane 1 Traffic Light"
 * 	state={TrafficLightStates.RED}
 * />
 * <TrafficLight
 * 	label="Westbound Lane 1 Traffic Light"
 * 	state={TrafficLightStates.GREEN}
 * />
 * ```
 */
export function TrafficLight({ label, state }: TrafficLightProps) {
	return (
		<div className={`traffic-light ${state}-state`}>
			<TrafficLightButton label={label} />
		</div>
	)
}

type TrafficLightProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
	/** The current state of the traffic light. */
	state: TrafficLightState
}

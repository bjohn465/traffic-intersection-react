import { TrafficLightButton } from './TrafficLightButton'

/**
 * Renders a traffic light using a `TrafficLightButton`,
 * so it must be rendered within a `TrafficLightButtonTooltipProvider`.
 */
export function TrafficLight({ label }: TrafficLightProps) {
	return (
		<div className="traffic-light">
			<TrafficLightButton label={label} />
		</div>
	)
}

type TrafficLightProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
}

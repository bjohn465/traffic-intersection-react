import { getDisplayState, type TrafficLightState } from './TrafficLightStates'

/**
 * Displays the details of a traffic light,
 * such as the label and the current state of the traffic light,
 * as a popover,
 * using the given `id` as the popover element's `id` attribute.
 *
 * @example
 * ```tsx
 * <TrafficLightDetails
 *  id="details-1"
 *  label="Northbound Lane 1 Traffic Light"
 *  state={TrafficLightStates.GREEN}
 * />
 * ```
 */
export function TrafficLightDetails({
	id,
	label,
	state,
}: TrafficLightDetailsProps) {
	return (
		<div className="traffic-light-details" id={id} popover="auto">
			<p className="traffic-light-label">{label}</p>
			<p className="traffic-light-state">
				State: <span className="state-text">{getDisplayState(state)}</span>
			</p>
		</div>
	)
}

type TrafficLightDetailsProps = {
	/** The value to use for the element's `id` attribute. */
	id: string
	/** The text label for this button, describing the location of the traffic light. */
	label: string
	/** The current state of the traffic light. */
	state: TrafficLightState
}

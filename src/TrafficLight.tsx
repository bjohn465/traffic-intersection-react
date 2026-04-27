import { useId } from 'react'
import { TrafficLightButton } from './TrafficLightButton'
import { TrafficLightDetails } from './TrafficLightDetails'
import {
	type LeftArrowTrafficLightState,
	type StandardTrafficLightState,
	type TrafficLightState,
} from './TrafficLightStates'

/**
 * Renders a "standard" traffic light
 * (that has red, yellow, and green lights that are each round)
 * using a `TrafficLightButton`,
 * so it must be rendered within a `TrafficLightButtonTooltipProvider`.
 *
 * @example
 * ```tsx
 * // Within a `TrafficLightButtonTooltipProvider` element:
 * <StandardTrafficLight
 * 	label="Northbound Lane 1 Traffic Light"
 * 	state={StandardTrafficLightState.RED}
 * />
 * <StandardTrafficLight
 * 	label="Westbound Lane 1 Traffic Light"
 * 	state={StandardTrafficLightState.GREEN}
 * />
 * ```
 */
export function StandardTrafficLight({
	label,
	state,
}: StandardTrafficLightProps) {
	return (
		<TrafficLight
			label={label}
			state={state}
			type={TrafficLightTypes.STANDARD}
		/>
	)
}

type StandardTrafficLightProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
	/** The current state of the traffic light. */
	state: StandardTrafficLightState
}

/**
 * Renders a "left arrow" traffic light
 * (that has red, yellow, flashing yellow, and green lights
 * that are each shaped like left-facing arrows)
 * using a `TrafficLightButton`,
 * so it must be rendered within a `TrafficLightButtonTooltipProvider`.
 *
 * @example
 * ```tsx
 * // Within a `TrafficLightButtonTooltipProvider` element:
 * <LeftArrowTrafficLight
 * 	label="Northbound Lane 1 Traffic Light"
 * 	state={LeftArrowTrafficLightStates.RED}
 * />
 * <LeftArrowTrafficLight
 * 	label="Westbound Lane 1 Traffic Light"
 * 	state={LeftArrowTrafficLightStates.FLASHING_YELLOW}
 * />
 * ```
 */
export function LeftArrowTrafficLight({
	label,
	state,
}: LeftArrowTrafficLightProps) {
	return (
		<TrafficLight
			label={label}
			state={state}
			type={TrafficLightTypes.LEFT_ARROW}
		/>
	)
}

type LeftArrowTrafficLightProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
	/** The current state of the traffic light. */
	state: LeftArrowTrafficLightState
}

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
 * 	type={TrafficLightTypes.STANDARD}
 * />
 * <TrafficLight
 * 	label="Westbound Lane 1 Traffic Light"
 * 	state={TrafficLightStates.GREEN}
 * 	type={TrafficLightTypes.LEFT_ARROW}
 * />
 * ```
 */
function TrafficLight({ label, state, type }: TrafficLightProps) {
	const detailsId = useId()
	return (
		<div className={`traffic-light ${type}-type ${state}-state`}>
			<TrafficLightButton detailsId={detailsId} label={label} />
			<TrafficLightDetails id={detailsId} label={label} state={state} />
		</div>
	)
}

type TrafficLightProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
	/** The current state of the traffic light. */
	state: TrafficLightState
	/** The type of traffic light (from `TrafficLightTypes`) to render. */
	type: TrafficLightType
}

/** Possible traffic light types */
const TrafficLightTypes = Object.freeze({
	/** Has red, yellow, and green lights that are each round. */
	STANDARD: 'standard',
	/** Has red, yellow, flashing yellow, and green lights that are each shaped as a left arrow. */
	LEFT_ARROW: 'left-arrow',
})
type TrafficLightType =
	(typeof TrafficLightTypes)[keyof typeof TrafficLightTypes]

import {
	type LeftArrowTrafficLightState,
	type StandardTrafficLightState,
} from './TrafficLightStates'

/** Describes the state of an intersection. */
export type IntersectionState = {
	/** The state of the northbound signals */
	north: IntersectionDirectionState
	/** The state of the eastbound signals */
	east: IntersectionDirectionState
	/** The state of the southbound signals */
	south: IntersectionDirectionState
	/** The state of the westbound signals */
	west: IntersectionDirectionState
}

type IntersectionDirectionState = {
	/** The state of the left turn signal */
	left: LeftArrowTrafficLightState
	/** The state of the through-lane traffic lights */
	through: StandardTrafficLightState
}

import {
	type LeftArrowTrafficLightState,
	LeftArrowTrafficLightStates,
	type StandardTrafficLightState,
	StandardTrafficLightStates,
} from './TrafficLightStates'

export const state: IntersectionState = Object.freeze({
	north: Object.freeze({
		left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
		through: StandardTrafficLightStates.RED,
	}),
	east: Object.freeze({
		left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
		through: StandardTrafficLightStates.RED,
	}),
	south: Object.freeze({
		left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
		through: StandardTrafficLightStates.RED,
	}),
	west: Object.freeze({
		left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
		through: StandardTrafficLightStates.RED,
	}),
})

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

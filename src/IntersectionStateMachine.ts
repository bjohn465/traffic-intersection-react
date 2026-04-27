import {
	LeftArrowTrafficLightStates,
	StandardTrafficLightStates,
} from './TrafficLightStates'
import { type IntersectionState } from './IntersectionState'

/**
 * A state machine that cycles through the various states of the traffic lights
 * in the intersection. This machine is agnostic of the rendering layer.
 */
export class IntersectionStateMachine {
	private currentIndex = 0

	/**
	 * Returns the current state of the intersection in the IntersectionState format.
	 */
	public getState() {
		return states[this.currentIndex]
	}

	/**
	 * Transitions the machine to the next state in the sequence.
	 * Follows typical stoplight behavior (Green -> Yellow -> Red).
	 */
	public next() {
		this.currentIndex = (this.currentIndex + 1) % states.length
	}
}

const allRedState = {
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
}

const northAndSouthLeftTurnCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
	])

const northAndSouthThroughCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
	])

const eastAndWestLeftTurnCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
		},
	])

const eastAndWestThroughCycle: ReadonlyArray<IntersectionState> = Object.freeze(
	[
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			}),
		},
		{
			north: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			east: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			}),
			south: Object.freeze({
				left: LeftArrowTrafficLightStates.RED_LEFT_ARROW,
				through: StandardTrafficLightStates.RED,
			}),
			west: Object.freeze({
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			}),
		},
	],
)

const states: ReadonlyArray<IntersectionState> = Object.freeze([
	allRedState,
	...northAndSouthLeftTurnCycle,
	allRedState,
	...northAndSouthThroughCycle,
	allRedState,
	...eastAndWestLeftTurnCycle,
	allRedState,
	...eastAndWestThroughCycle,
])

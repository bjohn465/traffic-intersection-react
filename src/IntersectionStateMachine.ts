import {
	LeftArrowTrafficLightStates,
	StandardTrafficLightStates,
} from './TrafficLightStates'
import { type IntersectionState } from './IntersectionState'

/**
 * Durations for each phase in milliseconds.
 */
const DURATIONS = {
	ALL_RED: 2000,
	GREEN_PRE_FLASHING_YELLOW: 1500,
	GREEN: 7000,
	YELLOW: 2500,
}

/**
 * A state machine that cycles through the various states of the traffic lights
 * in the intersection. This machine is agnostic of the rendering layer.
 */
export class IntersectionStateMachine {
	private currentPhaseIndex = 0
	private elapsedTime = 0
	private phases: { duration: number; state: IntersectionState }[]

	constructor() {
		this.phases = [
			// 1. All Red
			{ duration: DURATIONS.ALL_RED, state: allRedState },

			// 2. North/South Left Turn Cycle
			{ duration: DURATIONS.GREEN, state: northAndSouthLeftTurnCycle[0] },
			{ duration: DURATIONS.YELLOW, state: northAndSouthLeftTurnCycle[1] },

			// 3. All Red Buffer
			{ duration: DURATIONS.ALL_RED, state: allRedState },

			// 4. North/South Through Cycle
			{
				duration: DURATIONS.GREEN_PRE_FLASHING_YELLOW,
				state: northAndSouthThroughCycle[0],
			},
			{ duration: DURATIONS.GREEN, state: northAndSouthThroughCycle[1] },
			{ duration: DURATIONS.YELLOW, state: northAndSouthThroughCycle[2] },

			// 5. All Red Buffer
			{ duration: DURATIONS.ALL_RED, state: allRedState },

			// 6. East/West Left Turn Cycle
			{ duration: DURATIONS.GREEN, state: eastAndWestLeftTurnCycle[0] },
			{ duration: DURATIONS.YELLOW, state: eastAndWestLeftTurnCycle[1] },

			// 7. All Red Buffer
			{ duration: DURATIONS.ALL_RED, state: allRedState },

			// 8. East/West Through Cycle
			{
				duration: DURATIONS.GREEN_PRE_FLASHING_YELLOW,
				state: eastAndWestThroughCycle[0],
			},
			{ duration: DURATIONS.GREEN, state: eastAndWestThroughCycle[1] },
			{ duration: DURATIONS.YELLOW, state: eastAndWestThroughCycle[2] },
		]
	}

	/**
	 * Updates the internal timer.
	 * @param deltaTime The time elapsed since the last update in milliseconds.
	 * @returns `true` if the phase has changed, requiring a UI update.
	 */
	public update(deltaTime: number): boolean {
		this.elapsedTime += deltaTime

		const currentPhase = this.phases[this.currentPhaseIndex]
		if (this.elapsedTime >= currentPhase.duration) {
			this.next()
			return true
		}
		return false
	}

	/**
	 * Transitions the machine to the next phase immediately.
	 */
	public next() {
		this.currentPhaseIndex = (this.currentPhaseIndex + 1) % this.phases.length
		this.elapsedTime = 0
	}

	/**
	 * Returns the current traffic light configuration for the intersection.
	 */
	public getState(): IntersectionState {
		return this.phases[this.currentPhaseIndex].state
	}

	/**
	 * Returns the progress of the current phase (0 to 1).
	 */
	public getPhaseProgress(): number {
		const duration = this.phases[this.currentPhaseIndex].duration
		return Math.min(this.elapsedTime / duration, 1)
	}
}

const allRedState: IntersectionState = Object.freeze({
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

const northAndSouthLeftTurnCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			...allRedState,
			north: {
				...allRedState.north,
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
			},
			south: {
				...allRedState.south,
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
			},
		},
		{
			...allRedState,
			north: {
				...allRedState.north,
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
			},
			south: {
				...allRedState.south,
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
			},
		},
	])

const northAndSouthThroughCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			...allRedState,
			north: {
				...allRedState.north,
				through: StandardTrafficLightStates.GREEN,
			},
			south: {
				...allRedState.south,
				through: StandardTrafficLightStates.GREEN,
			},
		},
		{
			...allRedState,
			north: {
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			},
			south: {
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			},
		},
		{
			...allRedState,
			north: {
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			},
			south: {
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			},
		},
	])

const eastAndWestLeftTurnCycle: ReadonlyArray<IntersectionState> =
	Object.freeze([
		{
			...allRedState,
			east: {
				...allRedState.east,
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
			},
			west: {
				...allRedState.west,
				left: LeftArrowTrafficLightStates.GREEN_LEFT_ARROW,
			},
		},
		{
			...allRedState,
			east: {
				...allRedState.east,
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
			},
			west: {
				...allRedState.west,
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
			},
		},
	])

const eastAndWestThroughCycle: ReadonlyArray<IntersectionState> = Object.freeze(
	[
		{
			...allRedState,
			east: {
				...allRedState.east,
				through: StandardTrafficLightStates.GREEN,
			},
			west: {
				...allRedState.west,
				through: StandardTrafficLightStates.GREEN,
			},
		},
		{
			...allRedState,
			east: {
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			},
			west: {
				left: LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.GREEN,
			},
		},
		{
			...allRedState,
			east: {
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			},
			west: {
				left: LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW,
				through: StandardTrafficLightStates.YELLOW,
			},
		},
	],
)

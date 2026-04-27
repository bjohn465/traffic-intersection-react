export type TrafficLightState =
	| StandardTrafficLightState
	| LeftArrowTrafficLightState

/** States for a "standard" traffic light */
export const StandardTrafficLightStates = Object.freeze({
	RED: 'red',
	YELLOW: 'yellow',
	GREEN: 'green',
})
export type StandardTrafficLightState =
	(typeof StandardTrafficLightStates)[keyof typeof StandardTrafficLightStates]

/** States for a "left arrow" traffic light */
export const LeftArrowTrafficLightStates = Object.freeze({
	RED_LEFT_ARROW: 'red-left-arrow',
	YELLOW_LEFT_ARROW: 'yellow-left-arrow',
	GREEN_LEFT_ARROW: 'green-left-arrow',
	FLASHING_YELLOW_LEFT_ARROW: 'flashing-yellow-left-arrow',
})
export type LeftArrowTrafficLightState =
	(typeof LeftArrowTrafficLightStates)[keyof typeof LeftArrowTrafficLightStates]

/**
 * Gets the text to display to the user for a given traffic light state.
 */
export function getDisplayState(state: TrafficLightState) {
	switch (state) {
		case StandardTrafficLightStates.RED:
		case LeftArrowTrafficLightStates.RED_LEFT_ARROW:
			return 'Red'
		case StandardTrafficLightStates.YELLOW:
		case LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW:
			return 'Yellow'
		case StandardTrafficLightStates.GREEN:
		case LeftArrowTrafficLightStates.GREEN_LEFT_ARROW:
			return 'Green'
		case LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW:
			return 'Flashing yellow'
	}
}

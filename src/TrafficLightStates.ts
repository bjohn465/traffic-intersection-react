export const TrafficLightStates = Object.freeze({
	RED: 'red',
	YELLOW: 'yellow',
	GREEN: 'green',
})
export type TrafficLightState =
	(typeof TrafficLightStates)[keyof typeof TrafficLightStates]

/**
 * Gets the text to display to the user for a given traffic light state.
 */
export function getDisplayState(state: TrafficLightState) {
	switch (state) {
		case TrafficLightStates.RED:
			return 'Red'
		case TrafficLightStates.YELLOW:
			return 'Yellow'
		case TrafficLightStates.GREEN:
			return 'Green'
	}
}

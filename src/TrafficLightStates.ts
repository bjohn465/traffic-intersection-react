export const TrafficLightStates = Object.freeze({
	RED: 'red',
	YELLOW: 'yellow',
	GREEN: 'green',
})
export type TrafficLightState =
	(typeof TrafficLightStates)[keyof typeof TrafficLightStates]

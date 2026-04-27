/** Possible locations of traffic light masts, with north oriented up. */
export const TrafficLightMastLocations = Object.freeze({
	/** The north side of the intersection. */
	NORTH: 'north',
	/** The east side of the intersection. */
	EAST: 'east',
	/** The south side of the intersection. */
	SOUTH: 'south',
	/** The west side of the intersection. */
	WEST: 'west',
})
export type TrafficLightMastLocation =
	(typeof TrafficLightMastLocations)[keyof typeof TrafficLightMastLocations]

import { type IntersectionState } from './IntersectionState'
import { TrafficLightButtonTooltipProvider } from './TrafficLightButton'
import { LeftArrowTrafficLight, StandardTrafficLight } from './TrafficLight'
import { TrafficLightMast } from './TrafficLightMast'
import { TrafficLightMastLocations } from './TrafficLightMasterLocations'

/**
 * Displays an intersection in the given state.
 */
export function Intersection({ state }: IntersectionProps) {
	return (
		<div className="intersection">
			<TrafficLightButtonTooltipProvider>
				<TrafficLightMast location={TrafficLightMastLocations.NORTH}>
					<LeftArrowTrafficLight
						label="Northbound Left Turn Lane Traffic Light"
						state={state.north.left}
					/>
					<StandardTrafficLight
						label="Northbound Lane 1 Traffic Light"
						state={state.north.through}
					/>
					<StandardTrafficLight
						label="Northbound Lane 2 Traffic Light"
						state={state.north.through}
					/>
				</TrafficLightMast>
				<TrafficLightMast location={TrafficLightMastLocations.EAST}>
					<LeftArrowTrafficLight
						label="Eastbound Left Turn Lane Traffic Light"
						state={state.east.left}
					/>
					<StandardTrafficLight
						label="Eastbound Lane 1 Traffic Light"
						state={state.east.through}
					/>
					<StandardTrafficLight
						label="Eastbound Lane 2 Traffic Light"
						state={state.east.through}
					/>
				</TrafficLightMast>
				<TrafficLightMast location={TrafficLightMastLocations.SOUTH}>
					<LeftArrowTrafficLight
						label="Southbound Left Turn Lane Traffic Light"
						state={state.south.left}
					/>
					<StandardTrafficLight
						label="Southbound Lane 1 Traffic Light"
						state={state.south.through}
					/>
					<StandardTrafficLight
						label="Southbound Lane 2 Traffic Light"
						state={state.south.through}
					/>
				</TrafficLightMast>
				<TrafficLightMast location={TrafficLightMastLocations.WEST}>
					<LeftArrowTrafficLight
						label="Westbound Left Turn Lane Traffic Light"
						state={state.west.left}
					/>
					<StandardTrafficLight
						label="Westbound Lane 1 Traffic Light"
						state={state.west.through}
					/>
					<StandardTrafficLight
						label="Westbound Lane 2 Traffic Light"
						state={state.west.through}
					/>
				</TrafficLightMast>
			</TrafficLightButtonTooltipProvider>
		</div>
	)
}

type IntersectionProps = {
	/** The current state of the traffic lights in the intersection. */
	state: IntersectionState
}

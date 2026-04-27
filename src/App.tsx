import { TrafficLightButtonTooltipProvider } from './TrafficLightButton'
import { LeftArrowTrafficLight, StandardTrafficLight } from './TrafficLight'
import { TrafficLightMast } from './TrafficLightMast'
import { TrafficLightMastLocations } from './TrafficLightMasterLocations'
import {
	LeftArrowTrafficLightStates,
	StandardTrafficLightStates,
} from './TrafficLightStates'

export default function App() {
	return (
		<TrafficLightButtonTooltipProvider>
			<TrafficLightMast location={TrafficLightMastLocations.NORTH}>
				<LeftArrowTrafficLight
					label="Northbound Left Turn Lane Traffic Light"
					state={LeftArrowTrafficLightStates.RED_LEFT_ARROW}
				/>
				<StandardTrafficLight
					label="Northbound Lane 1 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
				<StandardTrafficLight
					label="Northbound Lane 2 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
			</TrafficLightMast>
			<TrafficLightMast location={TrafficLightMastLocations.EAST}>
				<LeftArrowTrafficLight
					label="Eastbound Left Turn Lane Traffic Light"
					state={LeftArrowTrafficLightStates.RED_LEFT_ARROW}
				/>
				<StandardTrafficLight
					label="Eastbound Lane 1 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
				<StandardTrafficLight
					label="Eastbound Lane 2 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
			</TrafficLightMast>
			<TrafficLightMast location={TrafficLightMastLocations.SOUTH}>
				<LeftArrowTrafficLight
					label="Southbound Left Turn Lane Traffic Light"
					state={LeftArrowTrafficLightStates.RED_LEFT_ARROW}
				/>
				<StandardTrafficLight
					label="Southbound Lane 1 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
				<StandardTrafficLight
					label="Southbound Lane 2 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
			</TrafficLightMast>
			<TrafficLightMast location={TrafficLightMastLocations.WEST}>
				<LeftArrowTrafficLight
					label="Westbound Left Turn Lane Traffic Light"
					state={LeftArrowTrafficLightStates.RED_LEFT_ARROW}
				/>
				<StandardTrafficLight
					label="Westbound Lane 1 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
				<StandardTrafficLight
					label="Westbound Lane 2 Traffic Light"
					state={StandardTrafficLightStates.RED}
				/>
			</TrafficLightMast>
		</TrafficLightButtonTooltipProvider>
	)
}

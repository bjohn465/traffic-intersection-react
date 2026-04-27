import { TrafficLightButtonTooltipProvider } from './TrafficLightButton'
import { LeftArrowTrafficLight, StandardTrafficLight } from './TrafficLight'
import {
	LeftArrowTrafficLightStates,
	StandardTrafficLightStates,
} from './TrafficLightStates'

export default function App() {
	return (
		<TrafficLightButtonTooltipProvider>
			<LeftArrowTrafficLight
				label="Northbound Left Turn Lane Traffic Light"
				state={LeftArrowTrafficLightStates.RED_LEFT_ARROW}
			/>
			<LeftArrowTrafficLight
				label="Northbound Left Turn Lane Traffic Light"
				state={LeftArrowTrafficLightStates.YELLOW_LEFT_ARROW}
			/>
			<LeftArrowTrafficLight
				label="Northbound Left Turn Lane Traffic Light"
				state={LeftArrowTrafficLightStates.GREEN_LEFT_ARROW}
			/>
			<LeftArrowTrafficLight
				label="Northbound Left Turn Lane Traffic Light"
				state={LeftArrowTrafficLightStates.FLASHING_YELLOW_LEFT_ARROW}
			/>
			<StandardTrafficLight
				label="Northbound Lane 1 Traffic Light"
				state={StandardTrafficLightStates.RED}
			/>
			<StandardTrafficLight
				label="Northbound Lane 2 Traffic Light"
				state={StandardTrafficLightStates.YELLOW}
			/>
			<StandardTrafficLight
				label="Northbound Right Turn Lane Traffic Light"
				state={StandardTrafficLightStates.GREEN}
			/>
		</TrafficLightButtonTooltipProvider>
	)
}

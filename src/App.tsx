import { TrafficLightButtonTooltipProvider } from './TrafficLightButton'
import { TrafficLight } from './TrafficLight'
import { TrafficLightStates } from './TrafficLightStates'

export default function App() {
	return (
		<TrafficLightButtonTooltipProvider>
			<TrafficLight
				label="Northbound Lane 1 Traffic Light"
				state={TrafficLightStates.RED}
			/>
			<TrafficLight
				label="Northbound Lane 2 Traffic Light"
				state={TrafficLightStates.YELLOW}
			/>
			<TrafficLight
				label="Northbound Right Turn Lane Traffic Light"
				state={TrafficLightStates.GREEN}
			/>
		</TrafficLightButtonTooltipProvider>
	)
}

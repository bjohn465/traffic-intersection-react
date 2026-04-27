import { TrafficLightButtonTooltipProvider } from './TrafficLightButton'
import { TrafficLight } from './TrafficLight'

export default function App() {
	return (
		<TrafficLightButtonTooltipProvider>
			<TrafficLight label="Northbound Lane 1 Traffic Light" />
			<TrafficLight label="Northbound Lane 2 Traffic Light" />
		</TrafficLightButtonTooltipProvider>
	)
}

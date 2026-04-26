import {
	TrafficLightButtonTooltipProvider,
	TrafficLightButton,
} from './TrafficLightButton'

export default function App() {
	return (
		<TrafficLightButtonTooltipProvider>
			<TrafficLightButton label="Northbound Lane 1 Traffic Light" />
			<TrafficLightButton label="Northbound Lane 2 Traffic Light" />
		</TrafficLightButtonTooltipProvider>
	)
}

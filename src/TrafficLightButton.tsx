export default function TrafficLightButton({ label }: TrafficLightButtonProps) {
	return (
		<button aria-label={label} type="button">
			🚦
		</button>
	)
}

type TrafficLightButtonProps = {
	label: string
}

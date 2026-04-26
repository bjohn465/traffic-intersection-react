import { createContext, useContext } from 'react'

/** Provides the ID of the tooltip element for `TrafficLightButton`s. */
const TooltipIdContext = createContext<string>('')

/**
 * Wraps one or more `TrafficLightButton` components
 * and provides the required tooltip and tooltip context
 * for the `TrafficLightButton`s.
 *
 * We only need one element on the page to serve as the tooltip,
 * so we require the `TrafficLightButton`s
 * to be rendered within a `TrafficLightButtonTooltipProvider`,
 * which renders the singular tooltip element for us.
 *
 * @example
 * ```tsx
 * <TrafficLightButtonTooltipProvider>
 * 	<TrafficLightButton
 * 		// TrafficLightButton props
 * 	/>
 * </TrafficLightButtonTooltipProvider>
 * ```
 */
export function TrafficLightButtonTooltipProvider({
	children,
}: TrafficLightButtonTooltipProviderProps) {
	const tooltipId = 'traffic-light-tooltip'
	return (
		<>
			<TooltipIdContext value={tooltipId}>{children}</TooltipIdContext>
			<p className="traffic-light-tooltip" id={tooltipId} popover="hint">
				Click for details
			</p>
		</>
	)
}

type TrafficLightButtonTooltipProviderProps = {
	/** The content to render within the provider, particularly `TrafficLightButton` elements */
	children: React.ReactNode
}

/**
 * Renders a traffic light as a `<button>` element
 * and associates the `<button>` with a tooltip
 * using the tooltip context from `TrafficLightButtonTooltipProvider`.
 * The tooltip uses interest invokers, which is a new feature
 * that is only supported in Chromium-based browsers at the moment.
 *
 * Interest invokers allow us to add tooltips
 * without adding additional JavaScript to handle hover/focus events.
 *
 * The tooltip is also added as a description of the button
 * for screen reader users,
 * so they should always have access to that additional information
 * even if the browser does not support interest invokers.
 * Since the tooltips are not critical,
 * it is okay if they are not available
 * in unsupported browsers.
 *
 * @example
 * ```tsx
 * // Within a `TrafficLightButtonTooltipProvider` element:
 * <TrafficLightButton label="Northbound Lane 1 Traffic Light" />
 * ```
 */
export function TrafficLightButton({ label }: TrafficLightButtonProps) {
	const tooltipId = useContext(TooltipIdContext)
	if (!tooltipId) {
		throw new Error(
			'TrafficLightButton must be used within a TrafficLightButtonTooltipProvider',
		)
	}
	return (
		<button
			aria-describedby={tooltipId}
			aria-label={label}
			className="traffic-light-button"
			interestfor={tooltipId}
			type="button"
		>
			🚦
		</button>
	)
}

type TrafficLightButtonProps = {
	/** The text label for this button, describing the location of the traffic light. */
	label: string
}

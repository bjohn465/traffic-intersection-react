import { type TrafficLightMastLocation } from './TrafficLightMasterLocations'

/**
 * Serves as a grouping of traffic lights
 * (`StandardTrafficLight`s and/or `LeftArrowTrafficLight`s),
 * allowing the traffic lights within the group
 * (i.e. on the same mast)
 * to move together as one
 * for styling and positioning purposes.
 *
 * @example
 * ```tsx
 * <TrafficLightMast location={TrafficLightMasterLocations.NORTH}>
 *  <LeftArrowTrafficLight
 *    // LeftArrowTrafficLight props
 *  />
 *  <StandardTrafficLight
 *    // StandardTrafficLight props
 *  />
 * </TrafficLightMast>
 * ```
 */
export function TrafficLightMast({
	children,
	location,
}: TrafficLightMastProps) {
	return <div className={`traffic-light-mast ${location}-mast`}>{children}</div>
}

type TrafficLightMastProps = {
	/** The content to render within the mast. These will typically be one or more `StandardTrafficLight`s and possibly one or more `LeftArrowTrafficLight`.  */
	children: React.ReactNode
	/** The location of the traffic light mast in the intersection, with up being north. */
	location: TrafficLightMastLocation
}

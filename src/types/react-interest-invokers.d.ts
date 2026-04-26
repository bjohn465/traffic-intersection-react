import type {} from 'react'

declare module 'react' {
	interface ButtonHTMLAttributes {
		/** Defines the `<button>` element as an interest invoker. Its value is the id of a target element, which will be affected in some way (normally shown or hidden) when interest is shown or lost on the invoker element (for example, by hovering/unhovering or focusing/blurring it) */
		interestfor?: string | undefined
	}
}

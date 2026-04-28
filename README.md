# Traffic Intersection

Models a four-way traffic intersection. Each part of the intersection has four
lanes:

- A left turn lane
- Two middle lanes that go straight
- A right turn lane

The traffic light can either be red, yellow, or green. The left-hand turn lane
has its own dedicated light. That light can either be red, yellow, green, or
flashing orange (go if no cars are coming the other way).

## Getting Started

### Requirements

[Node.js](https://nodejs.org/) versions that match the range `>=24.15.0 <25` and
an [`npm` CLI](https://docs.npmjs.com/cli/) version that matches the range
`>=11.12.1 <12` are required to run the code.

The program is best viewed on a desktop browser with JavaScript enabled and
support for the following features:

- The [popover API](https://caniuse.com/wf-popover)
- [CSS anchor positioning](https://caniuse.com/css-anchor-positioning)
- [CSS nesting](https://caniuse.com/css-nesting)
- [CSS variables](https://caniuse.com/css-variables)

A browser that supports
[interest invokers](https://caniuse.com/wf-interest-invokers) is recommended but
not required.

### Running the Code

Run the following commands to run the program after cloning or downloading the
code locally:

```bash
npm install
npm run dev
```

Then open a browser and navigate to [localhost:5173](http://localhost:5173).

## Design

I wanted the UI to be somewhat accessible, especially for keyboard-only and
screen reader users. I am sure there are things that can still be done to
improve the accessibility, as accessibility is a spectrum. I feel that making
the traffic lights buttons with tooltips that indicate what the buttons are for
and popovers that contain information about each light and its status go a long
way in making the UI more accessible.

I tried to make the components fairly composable, and I tried to make it easy to
do the right thing. For example, the buttons all share the same tooltip element.
To ensure that element is present and it is only on the page one time, the
buttons for the traffic lights are wrapped in a
`TrafficLightButtonTooltipProvider` component that renders the tooltip element
and provides the ID of the element via context. Any `TrafficLightButton` that is
not rendered within the provider will throw an error. Buttons that are properly
rendered will get the ID of the element they need to reference via the
provider's context.

I decided to use the popover API and interest invokers to reduce the amount of
JavaScript code needed to handle popover and tooltip UI state. These features
are fairly new to browsers, especially interest invokers, which are still quite
experimental and not supported by all browsers yet. The tooltips are minor, and
the information is still importantly available to screen reader users via an
`aria-describedby` attribute, so using a browser that does not support interest
invokers is not a terribly broken experience. The popover API is more widely
supported, and pairing that with CSS anchor positioning really cuts down on the
amount of JavaScript and CSS needed to display and handle popovers.

I did not use LLMs very much for this exercise. I used an LLM to generate the
traffic light images and the intersection image. I manually created the sprites
containing the different states of the traffic lights. Once much of the UI was
in place and the structure of the state the UI expected was defined, I used an
LLM to create the state machine for the intersection states. The LLM also came
up with the code to run through the states on a timer.

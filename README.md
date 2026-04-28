# Traffic Intersection

Models a a four-way traffic intersection. Each part of the intersection has four
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

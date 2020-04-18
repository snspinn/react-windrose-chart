# Windrose Chart Component

![Node.js Package](https://github.com/eunchurn/react-windrose-chart/workflows/Node.js%20Package/badge.svg?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/eunchurn/react-windrose-chart.svg)](https://greenkeeper.io/) ![npm](https://img.shields.io/npm/dw/react-windrose-chart) [![codecov](https://codecov.io/gh/eunchurn/react-windrose-chart/branch/master/graph/badge.svg)](https://codecov.io/gh/eunchurn/react-windrose-chart) ![NPM](https://img.shields.io/npm/l/react-windrose-chart) [![npm version](https://badge.fury.io/js/react-windrose-chart.svg)](https://badge.fury.io/js/react-windrose-chart) [![GitHub Package Registry version](https://img.shields.io/github/v/release/eunchurn/react-windrose-chart.svg?label=GPR&logo=github)](https://github.com/eunchurn/react-windrose-chart/packages/54428) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[**Storybook**](https://eunchurn.github.io/react-windrose-chart/)

## Features

![react-windrose-chart](./doc/images/react-windrose-chart.png)

- [D3js](https://d3js.org/) (Javascript library for manipulating documents based on data) implemented SVG rendering
- Inspired from [ssmaroju](https://bl.ocks.org/ssmaroju)'s [Wind Rose Plot](https://bl.ocks.org/ssmaroju/96af159c1872c2928a972c441bccaf50)

## Installation

```bash
npm i react-windrose-chart
```

## Usage

```javascript
import React from "react";
import styled from "styled-components";
import { WindRose } from "react-windrose-chart";

const Container = styled.div`
  width: 600px;
  height: 600px;
`;

const data = {
  data: [
    {
      angle: "N  ",
      "0-1": 0.5,
      /* ... */
      "6-7": 0.2,
      "7+": 0.1,
      total: 4.9
    } /* ... */
  ],
  columns: [
    "angle",
    "0-1",
    /* ... */
    "6-7",
    "7+"
  ]
};

const App = () => (
  <Container>
    <WindRose data={data.data} columns={data.columns} />
  </Container>
);
```

## Props

|Name|Type|Required|Description|Default|
|:--:|:--:|:-----:|:----------|:------|
|**data**|`Array`|`Required`|Wind Rose Chart data||
|**columns**|`Array`|`Required`|Wind Rose Chart header string array||
|**width**|`Number`|| container width, default value: `500`||
|**height**|`Number`|| container height, default value: `500`||

### `data` Object array

check [sample data](stories/data.json)

|Name|Type|Required|Description|Default|
|:--:|:--:|:-----:|:----------|:------|
|**0-1**|`Number`|`Required`| Frequency of 0-1 m/sec ||
|**1-2**|`Number`|`Required`| Frequency of 1-2 m/sec ||
|**2-3**|`Number`|`Required`| Frequency of 2-3 m/sec ||
|**3-4**|`Number`|`Required`| Frequency of 3-4 m/sec ||
|**4-5**|`Number`|`Required`| Frequency of 4-5 m/sec ||
|**5-6**|`Number`|`Required`| Frequency of 5-6 m/sec ||
|**6-7**|`Number`|`Required`| Frequency of 6-7 m/sec ||
|**7+**|`Number`|`Required`| Frequency of 7+ m/sec ||
|**angle**|`String`|`Required`| Wind direction `N`, `NNE`, `NE`, `ENE`, `E`, `ESE`, `SE`, `SSE`, `S`, `SSW`, `SW`, `WSW`, `W`, `WNW`, `NW`, `NNW`  ||
|**total**|`Number`|`Required`| Sum of frequencies of this direction ||

### Data utils

- Wind Rose data can be converted by Wind direction(degree) and wind speed data: `{timestamp, direction, speed}` to `{data, columns}`

```javascript
import { caculateWindRose } from "react-windrose-chart";

const data = {
  direction: [270, 256, 240,...],
  speed: [ 1.02, 0.85, 0.98,...]
}

const windRoseData = calculateWindRose(data);
// Return {data, columns}
```

- Classifying direction function only is as:

```javascript
import { classifyDir } from "react-windrose-chart";

const directionCharacter = classifyDir(270);
// Return : 'W'
```

## Development

### directory & source

- `./src`: wind rose chart component source
- `./dist`: wind rose chart component distribution
- `./stories`: wind rose chart component's storybook source
- `./babel.config.js`: babel configure. (version 7.x)
- `./rollup.config.common.js`: common rollup configuration.
- `./rollup.config.dev.js`: development mode rollup configuration.
- `./rollup.config.prod.js`: production mode rollup configuration.

### scripts

- `yarn storybook`: run storybook component test
- `yarn storybook:build`: storybook build
- `yarn storybook:deploy`: storybook `gh-pages` deploy
- `yarn build`: build the wind rose char component by rollup.
- `yarn build:watch`: build watch mode.
- `yarn dist`: distribution [lerna](https://lerna.js.org) for managing javascript projects with multiple packages.
- `yarn start`: build the wind rose chart component and start storybook with this.
- `yarn test`: testing javasciript code with [jest](https://jestjs.io/) `BABEL_ENV=test`

## Real-Time

Real-Time chart data from Anemometer

![realtime-chart](doc/images/realtime.gif)

## License

MIT

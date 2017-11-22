# progress-meter

#### This is a simple progress meter for react applications using `<svg>` element that can be configured through props.

<a href="https://imgflip.com/gif/1zskh3"><img src="https://i.imgflip.com/1zskh3.gif" title="made at imgflip.com"/></a>


## Usage

```
npm install --save progress-meter
```
After installing the package simply import it and use it as a meter component.

```
import Meter from 'progress-meter';

<Meter 
  percent={percent}
  color={color}
  label={label}
  rounded
  animate
/>
```

## Props

Props | Default Values | Behaviour
----- | -------------- | --------
width|200| The width of the meter
height|6| Meter height.
percent|0|Takes value from 0 - 1 and times with the width of the component to display the meter progress.
rounded|true|Changes the border radius of the component.
color|#0078bc|can be updated to show different state.
animate|true|provides smooth animation to the progress meter.
labelSize|12|
label|null|null


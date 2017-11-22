# progress-meter

#### This is a simple progress meter for react applications using <svg> elements that can be configured through props.

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


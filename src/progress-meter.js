import React from 'react';

const Meter = function (props) {
    const {
        percent = 0.,         // number: 0 - 1, inclusive. Fill %
        width = 200,         // the width of our meter
        height = 6,         // the height of our meter
        rounded = true,      // if true, use rounded corners
        color = "#0078bc",   // the fill color
        animate = true,
        label,
        labelSize = 12
    } = props;

    var r = rounded ? Math.round(height / 2) : 0;
    var w = percent > 0 ? width * percent : 0;
    var style = animate ? { "transition": "width 500ms, fill 250ms", "opacity": 0.5 } : null
    return (
        <div>
            <div>
                <svg width={width} height={height}>
                    <rect width={width} height={height} fill="#ccc" rx={r} ry={r} />
                    <rect width={w} height={height} fill={color} rx={r} ry={r} style={style} />
                </svg>
            </div >
            <span style={{ marginLeft: 10, fontSize: labelSize, color }}>{label}</span>
        </div>
    );
}
// module.exports = Meter;
export default Meter;
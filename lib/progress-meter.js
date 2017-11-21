"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meter = function Meter(props) {
    var _props$percent = props.percent,
        percent = _props$percent === undefined ? 0. : _props$percent,
        _props$width = props.width,
        width = _props$width === undefined ? 200 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 6 : _props$height,
        _props$rounded = props.rounded,
        rounded = _props$rounded === undefined ? true : _props$rounded,
        _props$color = props.color,
        color = _props$color === undefined ? "#0078bc" : _props$color,
        _props$animate = props.animate,
        animate = _props$animate === undefined ? true : _props$animate,
        label = props.label,
        _props$labelSize = props.labelSize,
        labelSize = _props$labelSize === undefined ? 12 : _props$labelSize;


    var r = rounded ? Math.round(height / 2) : 0;
    var w = percent > 0 ? width * percent : 0;
    var style = animate ? { "transition": "width 500ms, fill 250ms", "opacity": 0.5 } : null;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "svg",
                { width: width, height: height },
                _react2.default.createElement("rect", { width: width, height: height, fill: "#ccc", rx: r, ry: r }),
                _react2.default.createElement("rect", { width: w, height: height, fill: color, rx: r, ry: r, style: style })
            )
        ),
        _react2.default.createElement(
            "span",
            { style: { marginLeft: 10, fontSize: labelSize, color: color } },
            label
        )
    );
};
exports.default = Meter;

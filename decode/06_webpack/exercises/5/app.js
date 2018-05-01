import React from 'react'
import ReactDOM from 'react-dom';

var root = document.getElementById('root');
var elem = React.createElement("img", {src: "image.jpg"});
ReactDOM.render(elem, root);

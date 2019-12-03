import React from 'react';
import {render} from 'react-dom';
import TodoContainer from './TodoContainer';

let rootEl = document.querySelector("#root");
render(<TodoContainer/>, rootEl);

// console.log(render);
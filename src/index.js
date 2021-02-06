// домашнє завдання
// створити елемент nav всередині якого буде список ul з чотирма елементами li


import React from 'react';
import ReactDOM from 'react-dom';

const li1 = React.createElement("li", {});
const li2 = React.createElement("li", {});
const li3 = React.createElement("li", {});
const li4 = React.createElement("li", {});

const ulElem = React.createElement("ul", {}, li1, li2, li3, li4);

const nav = React.createElement("nav", {}, ulElem);

ReactDOM.render(nav, document.getElementById("root"));

"use strict";

ReactDOM.render(React.createElement(
    "h1",
    { id: "title",
        className: "header",
        style: {
            backgroundColor: 'orange',
            color: 'green',
            fontFamily: 'verdana'
        } },
    "Hello World"
), document.getElementById('react-container'));

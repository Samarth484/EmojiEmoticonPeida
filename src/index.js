import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";
console.log(emojipedia);

var meaning = emojipedia.map(function (val) {
    return val.meaning.substring(0,101);
});
console.log(meaning);


ReactDOM.render(<h1>This is just a use case</h1>, document.getElementById("root"));
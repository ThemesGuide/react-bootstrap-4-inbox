import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import Inbox from "./components/Inbox";
import HeaderHtml from "./components/templates/HeaderHtml";

function App() {
  return (
    <div>
      <HeaderHtml />
      <div className="container">
        <Inbox />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

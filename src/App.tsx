import React from "react";
import { Provider } from "react-redux";
import reduxStore from "@/redux";
function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">test</header>
      </div>
    </Provider>
  );
}

export default App;

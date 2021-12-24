import React from "react"
import {Header, TypesMain, OtherMain, Footer} from './modules'
const visible = true
function App() {
  return (
    <div className="App">
        <Header/>
        <TypesMain/>
        <OtherMain/>
        <Footer/>
    </div>
  );
}

export default App;
import React from "react"
import classNames from "classnames";

import {Header, TypesMain, OtherMain} from './modules'

function App() {
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])
  
  return (
    <div className="App">
      <Header offset={offset}/>
      <div className={classNames('bg-container', {'bg-scrolled': offset>=750})}>
        <div className="container">
          <h2>В 2021 году великий маг Всеросии увёл войско за ворота.</h2>
        </div>
      </div>
      <TypesMain/>
      <OtherMain/>
    </div>
  );
}

export default App;

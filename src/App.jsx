import React from "react"

import {Header, TypesMain} from './Modules'

function App() {
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])
  console.log(offset)
  return (
    <div className="App">
      <Header/>
      <div className="bg-container">
        <div className="container">
          <h2>В 2021 году великий маг Всеросии увёл войско за ворота.</h2>
        </div>
      </div>
      <TypesMain/>
    </div>
  );
}

export default App;

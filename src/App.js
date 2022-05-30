import Header from "./components/Header";
import Main from "./components/Main";
import data from "./Data.js";
import Quotes from './components/Quotes'

export default function App() {
  const main = data.map((place) => {
    return <Main 
      place={place}
    />
  })
  return (
    <div className="app">
      <Header/>
      <Quotes/>
      {main}
    </div>
  );
}


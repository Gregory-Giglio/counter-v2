import './App.css';
import {useState} from "react";
import Counter from "./assets/components/Counter";

function App() {
  const [tabCounter, setTabCounter] = useState([0, 0, 0, 0]); //le premier élément du tableau correspond au nombre de counter à afficher
  
  return (
    <div className="App">
      
        <button className={tabCounter[0] === 3 && "hide"} onClick={() => {
          const newTab = [...tabCounter];
          newTab[0] = newTab[0] + 1;
          setTabCounter(newTab);
        }}>
          Add counter
        </button>
        
        <button className={tabCounter[0] === 0 && "hide"} onClick={() => {
          const newTab = [...tabCounter];
          newTab[0] = newTab[0] - 1;
          setTabCounter(newTab);
        }}>
          Remove counter
        </button>
      

      <div className="counters">
        <div className={tabCounter[0] < 1 && "hide"}>
          <Counter tabCounter={tabCounter} setTabCounter={setTabCounter} Counter="1" />
        </div>
        <div className={tabCounter[0] < 2 && "hide"}>
          <Counter tabCounter={tabCounter} setTabCounter={setTabCounter} Counter="2" />
        </div>
        <div className={tabCounter[0] < 3 && "hide"}>
          <Counter tabCounter={tabCounter} setTabCounter={setTabCounter} Counter="3" />
        </div>
      </div>
    </div>
  );
}

export default App;

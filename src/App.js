import './App.css';
import {useState} from "react";
import Counter from "./assets/components/Counter";

function App() {
  const [tabCounter, setTabCounter] = useState([]); //le premier élément du tableau correspond au nombre de counter à afficher
  
  return (
    <div className="App">
      
        <button className={tabCounter.length >= 3 ? "hide" : ""} onClick={() => {
          const newTab = [...tabCounter];
          newTab.push(0);
          setTabCounter(newTab);
        }}>
          Add counter
        </button>

        <button className={tabCounter.length === 0 ? "hide" : ""} onClick={() => {
          const newTab = [...tabCounter];
          newTab.pop();
          setTabCounter(newTab);
        }}>
          Remove counter
        </button>
      

      <div className="counters">
        
        {tabCounter.map((counter, index) => {
          return <Counter key={index} tabCounter={tabCounter} setTabCounter={setTabCounter} Counter={index} />;

        })}

      </div>
    </div>
  );
}

export default App;

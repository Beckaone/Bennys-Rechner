import "./App.css";
import RechnerKlasse from "./Rechner.js";
import { useState } from "react";

function App() {
  const rechner = new RechnerKlasse();


  const [wert1, setWert1] = useState("");
  const [wert2, setWert2] = useState("");
  const [ergebnis, setErgebnis] = useState("");
  const [zeigeWarnung, setZeigeWarnung] = useState(false)


  return (
    <div className="App">
      <h1>Benny's Rechner</h1>

      <form name="formular">
        <input id="F1" type="text" size="7" value={wert1} onChange={(event) => setWert1(event.target.value)}></input>
        <input id="F2" type="text" size="7" value={wert2} onChange={(event) => setWert2(event.target.value)}></input>

        <button type="button" onClick={() => {setErgebnis(rechner.onAddition(wert1, wert2))
                                              setZeigeWarnung(false)}}>
          +
        </button>
        <button type="button" onClick={() => setErgebnis(rechner.onSubtraktion(wert1, wert2))}>
          -
        </button>
        <button type="button" onClick={() => setErgebnis(rechner.onMultiplikation(wert1, wert2))}>
          *
        </button>
        <button type="button" onClick={() => setErgebnis(rechner.onDivision(wert1, wert2))}>
          /
        </button>
        <button type="button" onClick={() => setErgebnis(rechner.onProzent(wert1, wert2))}>
          in %
        </button>
        <button type="button" onClick={() => {
                                              if (wert2) {
                                              setZeigeWarnung(true); 
                                              } 
                                              setErgebnis(rechner.onQuadratwurzel(wert1))}}>
          √
        </button>
        <button type="button" onClick={() => {
                                              if (wert2) {
                                              alert('Es wird nur mit Eingabefeld 1 gerechnet!')
                                              } 
                                              setErgebnis(rechner.onQuadrat(wert1))}}>
          x²
        </button>
        

        <input id="F3" type="text" size="7" defaultValue={ergebnis}></input>
      </form>
      {zeigeWarnung && <p>Es wird nur mit Eingabefeld 1 gerechnet!</p>}
      
    </div>
  );
}

export default App;

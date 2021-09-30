import "./App.css";
import RechnerKlasse from "./Rechner.js";

function App() {
  const rechner = new RechnerKlasse();

  const addition = () => {
    rechner.onAddition();
  };

  return (
    <div className="App">
      <h1>Benny's Rechner</h1>

      <form name="formular">
        <input id="F1" type="text" size="7"></input>
        <input id="F2" type="text" size="7"></input>

        <button type="button" onClick={addition}>
          +
        </button>
        <button type="button" onClick={rechner.onSubtraktion}>
          -
        </button>
        <button type="button" onClick={rechner.onMultiplikation}>
          *
        </button>
        <button type="button" onClick={rechner.onDivision}>
          /
        </button>
        <button type="button" onClick={rechner.onProzent}>
          in %
        </button>
        <button type="button" onClick={rechner.onQuadratwurzel}>
          √
        </button>
        <button type="button" onClick={rechner.onQuadrat}>
          x²
        </button>

        <input id="F3" type="text" size="20"></input>
      </form>
    </div>
  );
}

export default App;

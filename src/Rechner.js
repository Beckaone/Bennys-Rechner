export default class RechnerKlasse {
  

  round(wert) {
    wert = parseFloat(wert);
    if (!wert) {
      return 0;
    }
    const ergebnis = wert * 100;
    return Math.round(ergebnis) / 100;
  }

  
  
  onAddition(wert1, wert2) {
    return parseFloat(wert1) + parseFloat(wert2);
  }
  
  onSubtraktion(wert1, wert2) {
    return parseFloat(wert1) - parseFloat(wert2);
  }

  onMultiplikation(wert1, wert2) {
    return parseFloat(wert1) * parseFloat(wert2);
  }

  onDivision(wert1, wert2) {
    return this.round(parseFloat(wert1) / parseFloat(wert2));
  }

  onQuadratwurzel(wert1) {
    return this.round(Math.sqrt(parseFloat(wert1)));
  }

  onQuadrat(wert1) {
    return Math.pow(parseFloat(wert1), 2);
  }

  onProzent(wert1, wert2) {
    return this.round(parseFloat(wert1) / parseFloat(wert2) * 100);
  }
  
}
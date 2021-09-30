export default class RechnerKlasse {
  onAddition() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    const field2Value = document.getElementById("F2").value;
    let intValue2 = parseInt(field2Value);

    this.onAdditionNachricht(intValue, intValue2);
  }
  onAdditionNachricht(field1, field2) {
    document.getElementById("F3").value = `${field1} + ${field2} = ${
      field1 + field2
    }`;
  }

  onSubtraktion() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    const field2Value = document.getElementById("F2").value;
    let intValue2 = parseInt(field2Value);
    this.onSubtraktionNachricht(intValue, intValue2);
  }
  onSubtraktionNachricht(field1, field2) {
    document.getElementById("F3").value = `${field1} - ${field2} = ${
      field1 - field2
    }`;
  }

  onMultiplikation() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    const field2Value = document.getElementById("F2").value;
    let intValue2 = parseInt(field2Value);
    this.onMultiplikationNachricht(intValue, intValue2);
  }
  onMultiplikationNachricht(field1, field2) {
    document.getElementById("F3").value = `${field1} * ${field2} = ${
      field1 * field2
    }`;
  }

  onDivision() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    const field2Value = document.getElementById("F2").value;
    let intValue2 = parseInt(field2Value);
    this.onDivisionNachricht(intValue, intValue2);
  }
  onDivisionNachricht(field1, field2) {
    document.getElementById("F3").value = `${field1} / ${field2} = ${this.round(
      field1 / field2
    )}`;
  }

  onQuadratwurzel() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    if (document.getElementById("F2").value) {
      alert(
        "Für das Ziehen der Quadratwurzel wird nur der Wert aus dem ersten Eingabefeld verwendet"
      );
    }
    this.onQuadratwurzelNachricht(intValue);
  }

  round(wert) {
    wert = parseFloat(wert);
    if (!wert) {
      return 0;
    }
    const ergebnis = wert * 100;
    return Math.round(ergebnis) / 100;
  }
  onQuadratwurzelNachricht(field1) {
    document.getElementById("F3").value = `√${field1} = ${this.round(
      Math.sqrt(field1)
    )}`;
  }

  onQuadrat() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    if (document.getElementById("F2").value) {
      alert(
        "Um die Quadratzahl auszurechnen wird nur der Wert aus dem ersten Eingabefeld verwendet"
      );
    }
    this.onQuadratNachricht(intValue);
  }
  onQuadratNachricht(field1) {
    document.getElementById("F3").value = `${field1}² = ${field1 * field1}`;
  }

  onProzent() {
    const fieldValue = document.getElementById("F1").value;
    let intValue = parseInt(fieldValue);
    const field2Value = document.getElementById("F2").value;
    let intValue2 = parseInt(field2Value);
    this.onProzentNachricht(intValue, intValue2);
  }
  onProzentNachricht(field1, field2) {
    document.getElementById(
      "F3"
    ).value = `${field1} von ${field2} = ${this.round(
      (field1 / field2) * 100
    )}%`;
  }
}

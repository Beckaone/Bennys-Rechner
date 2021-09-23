export default rechner = {
    onAddition: function() {
        const fieldValue = document.getElementById("F1").value;
        let intValue = parseInt(fieldValue);
        const field2Value = document.getElementById("F2").value;
        let intValue2 = parseInt(field2Value);
        onAdditionNachricht(intValue, intValue2);
    },
    onAdditionNachricht: function(field1, field2){
        document.getElementById('F3').value = `${field1} + ${field2} = ${field1+field2}`
    },
    
    onSubtraktion: function () {
        const fieldValue = document.getElementById("F1").value;
        let intValue = parseInt(fieldValue);
        const field2Value = document.getElementById("F2").value;
        let intValue2 = parseInt(field2Value);
        onSubtraktionNachricht(intValue, intValue2);
    },
    onSubtraktionNachricht: function (field1, field2){
        document.getElementById('F3').value = `${field1} - ${field2} = ${field1-field2}`
    },
    
    onMultiplikation: function() {
        const fieldValue = document.getElementById("F1").value;
        let intValue = parseInt(fieldValue);
        const field2Value = document.getElementById("F2").value;
        let intValue2 = parseInt(field2Value);
        onMultiplikationNachricht(intValue, intValue2);
    },
    onMultiplikationNachricht: function(field1, field2){
        document.getElementById('F3').value = `${field1} * ${field2} = ${field1*field2}`
    },
    
    onDivision: function() {
        const fieldValue = document.getElementById("F1").value;
        let intValue = parseInt(fieldValue);
        const field2Value = document.getElementById("F2").value;
        let intValue2 = parseInt(field2Value);
        onDivisionNachricht(intValue, intValue2);
    },
    onDivisionNachricht: function(field1, field2){
        document.getElementById('F3').value = `${field1} / ${field2} = ${round(field1/field2)}`
    },
    
    
    onQuadratwurzel: function() {
        const fieldValue = document.getElementById('F1').value;
        let intValue =parseInt(fieldValue);
            if (document.getElementById("F2").value) {
            alert('Für das Ziehen der Quadratwurzel wird nur der Wert aus dem ersten Eingabefeld verwendet');
        }
        onQuadratwurzelNachricht(intValue);
    },
    
    round: function(wert) {
        wert = parseFloat(wert);
        if(!wert) {
            return 0;
        }
        const ergebnis = wert*100;
        return Math.round(ergebnis)/100;
        },
    onQuadratwurzelNachricht: function(field1) {
        document.getElementById('F3').value = `√${field1} = ${round(Math.sqrt(field1))}`
    },
    
    onQuadrat: function() {
        const fieldValue = document.getElementById('F1').value;
        let intValue =parseInt(fieldValue);
                if (document.getElementById("F2").value) {
            alert('Um die Quadratzahl auszurechnen wird nur der Wert aus dem ersten Eingabefeld verwendet');
        }
        onQuadratNachricht(intValue);
    },
    onQuadratNachricht: function(field1) {
        document.getElementById('F3').value = `${field1}² = ${field1*field1}`
    },
    
    onProzent: function() {
        const fieldValue = document.getElementById("F1").value;
        let intValue = parseInt(fieldValue);
        const field2Value = document.getElementById("F2").value;
        let intValue2 = parseInt(field2Value);
        onProzentNachricht(intValue, intValue2);
    },
    onProzentNachricht: function(field1, field2){
        document.getElementById('F3').value = `${field1} von ${field2} = ${round(field1/field2*100)}%`
    }
};


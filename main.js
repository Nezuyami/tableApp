let storedElement;

function drawTable(){ 
    let s = "<table>";
    const lineCount = document.getElementById("line").value;
    const columnCount = document.getElementById("column").value;
    const lineNoSpace = lineCount.replaceAll(' ','');
    const columnNoSpace = columnCount.replaceAll(' ','');  
    const x = Number(lineNoSpace);
    const y = Number(columnNoSpace);  

    if (lineCount === '' || columnCount === '') {        
        alert("Some fild is empty!");
    }

    else if (lineNoSpace === '' || columnNoSpace === '') {
            alert("Don't use spaces!");
    }

    else if (isNaN(x) || isNaN(y)) {
            alert("You can use only numbers");
    }

    else if (x <= 0 || y <= 0) {
        alert("Negative!");
}
    
    for(let j = 0; j < x; j++){
        
        s += "<tr>";

        for(let i = 0; i < y; i++){
            s += "<td onclick = 'changeColor(this)'></td>";       
        }
        s += "</tr>";
           
    }

    s += "</table>";
    document.getElementById('tableContainer').innerHTML = s; 
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeColor(element) {
    const colorArr = ['red', 'yellow', 'aqua', 'green', 'orange', 'black', 'pink', 'violet', 'brown'];
    const i = getRandomInt(colorArr.length);
    const newColor = colorArr[i]
   
    if  (storedElement) {
        storedElement.style.backgroundColor = 'white' 
    }

    element.style.backgroundColor = newColor
    storedElement = element
  
}


  const generateTableBtn = document.querySelector("button");
  const inputRow = document.querySelector("body:nth-child(2)")

console.log(inputRow);
  
  generateTableBtn.addEventListener('click', (event)=>{
      // get the reference for the body
      let numOfRows = document.querySelector("[data-numOfRows]").value;
      let numOfColumns = document.querySelector("[data-numOfColumns]").value;
    
      let body = document.getElementsByTagName("body")[0];
  
      // creates a <table> element and a <tbody> element
      let tbl = document.createElement("table");
      let tblBody = document.createElement("tbody");
    
      // creating all cells
      for (let i = 0; i < numOfRows; i++) {
        // creates a table row
        let row = document.createElement("tr");
    
        for (let j = 0; j < numOfColumns; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          let cell = document.createElement("td");
          let cellText = document.createTextNode("cell in row "+i+", column "+j);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
    
        // add the row to the end of the table body
        tblBody.appendChild(row);
      }
    
      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
    //   tbl.setAttribute("border", "");
      tbl.classList.add("table");
      tbl.classList.add("table-dark");
      tbl.classList.add("table-striped");
      tbl.classList.add("table-bordered");


      event.preventDefault();
  });
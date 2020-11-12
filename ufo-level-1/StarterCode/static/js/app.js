// from data.js
var tableData = data;

// YOUR CODE HERE!
//table body
var tbody = d3.select("tbody");


//loop through data, create rows and append data to rows.
tableData.forEach(event => {
    console.log(event);
  
    
    var row = tbody.append("tr");
  
    
    Object.entries(event).forEach(([key, value]) => {
      console.log(key, value);
  
     
      var cell = row.append("td");
  
     
      cell.text(value);
    });
  });
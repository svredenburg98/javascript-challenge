// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
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

  button.on("click", function() {


    // remove any data from the table
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    // append stats to the table
    filteredData.forEach(event => {
        console.log(event);
      
        
        var row = tbody.append("tr");
      
        
        Object.entries(event).forEach(([key, value]) => {
          console.log(key, value);
      
         
          var cell = row.append("td");
      
         
          cell.text(value);
        });
      });
  });
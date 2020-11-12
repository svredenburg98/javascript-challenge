// from data.js
var tableData = data;
//datetime button
var button = d3.select("#filter-btn");
var cityButton = d3.select("#filter-city")
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
  //datetime button
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

  // city filter
  cityButton.on("click", function() {


    // remove any data from the table
    tbody.html("");
    // Select the input element and get the raw HTML node
    var inputCity = d3.select("#city");
    var inputDate = d3.select("#date");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var cityValue = inputCity.property("value");
    var dateValue = inputDate.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    var filteredData = tableData.filter(tableData => tableData.city === cityValue.toLowerCase() && tableData.datetime === dateValue && tableData.state === stateValue && tableData.country === countryValue && tableData.shape === shapeValue);
  
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
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element 
    // This helps to ensure that the type is correct for the comparison in the filter
    // This makes sure you have the property of the element you want and not the whole element that you are pulling
    // JavaScript includes lots automatic data type conversions that messes with what is considered equal to each other
    var inputValue = inputElement.property("value");

    // Console.log the data from data.js
    console.log(inputValue);

    //This filters the JSON dataset based on the entered date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // This clears the table of whatever was in it before
    tbody.selectAll("tr").remove();

    //This makes the new table based on the dates after the filtering done above
    filteredData.forEach(element => {
        console.log(element);
        var row = tbody.append("tr");
        Object.values(element).forEach(value => row.append("td").text(value))
    })

    // This clears the input field for the date entered
    inputElement.property("value", "")  
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);
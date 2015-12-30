
function getMaxObjectValue(this_array, element) {
	var values = [];
	for (var i = 0; i < this_array.length; i++) {
			values.push(Math.ceil(parseFloat(this_array[i][""+element])));
	}
	values.sort(function(a,b){return a-b});
	return values[values.length-1];
}

function getMinObjectValue(this_array, element) {
	var values = [];
	for (var i = 0; i < this_array.length; i++) {
			values.push(Math.floor(parseFloat(this_array[i][""+element])));
	}
	values.sort(function(a,b){return a-b});
	return values[0];
}

function line(elId, color, bgColor){

	var data = [];  								
	// this is our data array
	var startingDate = new Date(2012, 8, 18);		
	var total = 0;
	// this is a date object. each of our data objects is attached to a date
	for (var i = 0; i < 50; i++) {					
	// loop 10 times to create 10 data objects
		var tmpObj 	= {};							
			// this is a temporary data object
		tmpObj.date = new Date(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate()+i);				
			// the data for this data object. Increment it from the starting date.
		tmpObj.DAU 	= Math.round(700+Math.random() * 30);  			
			// random value. Round it to a whole number.
		data.push(tmpObj); 							
			// push the object into our data array
	}

	var width = 120, height = 140;
	var margin = {top: 30, right: 0, bottom: 40, left: 0}, width = width - margin.left - margin.right, height = height - margin.top - margin.bottom;
	// these are graph size settings

	var minDate = (data[0].date),
	maxDate = data[data.length-1].date;
	minObjectValue = getMinObjectValue(data, 'DAU');
	maxObjectValue = getMaxObjectValue(data, 'DAU');

	//create the graph object
	var vis= d3.select(elId).append("svg")
    	.data(data)
		.attr("class", "metrics-container")
   		.attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
  	.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var y = d3.scale.linear().domain([ minObjectValue - (.1 * minObjectValue) , maxObjectValue + (.1 * maxObjectValue) ]).range([height, 0]),
	x = d3.time.scale().domain([minDate, maxDate]).range([0, width]);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(5);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(5);


	var line = d3.svg.line()
		.x(function(d) { return x(d["date"]); })
		.y(function(d) { return y(d["DAU"]); })

	var area = d3.svg.area()
	    .x(function(d) { return x(d["date"]); })
	    .y0(1000)
	    .y1(function(d) { return y(d["DAU"]); });

	vis.append("svg:path")
		.attr("d", line(data))
		.style("stroke", function() { 
			return color;
		})
		.style("fill", "none")
		.style("stroke-width", "2.5");

	vis.append("path")
	  .datum(data)
	  .style("fill", bgColor)
	  // .style("opacity", "0.5")
	  .attr("d", area);


};

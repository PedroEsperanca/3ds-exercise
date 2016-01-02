var models = {
	revenue: {
		total: 200000,
		tablet: 120000,
		smartphone: 80000
	},
	impressions: {
		total: 50000000,
		tablet: 20000000,
		smartphone: 30000000
	},
	visits: {
		total: 600000000,
		tablet: 480000000,
		smartphone: 120000000
	},
	percentage: function(field, total){
		return (field/total)*100
	},
};

//export for requirejs
if(typeof module === 'undefined') {
	define('models', function (require) {
		return models;
	});
} 
//export for nodejs
else if(typeof module !== 'undefined') {
	module.exports = models;
}
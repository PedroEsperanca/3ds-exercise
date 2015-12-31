define('views', function (require) {

	return views = {
		renderDashboardElement: function (name, color1, color2) {
		    document.getElementById(name+"-tab").style.color = colorLuminance(color1, 0.1);
		    document.getElementById(name+"-smrt").style.color = colorLuminance(color1, -0.2);
		    line('#'+name+'-graph', color1, color2);
		    document.getElementById(name+"-total").innerHTML = formatNumber(models[name].total) + "€";
		    document.getElementById(name+"-tab-pctg").innerHTML = (models[name].tablet/models[name].total)*100 + "%";
		    document.getElementById(name+"-tab-number").innerHTML = formatNumber(models[name].tablet) + "€";
		    document.getElementById(name+"-smrt-pctg").innerHTML = (models[name].smartphone/models[name].total)*100 + "%";
		    document.getElementById(name+"-smrt-number").innerHTML = formatNumber(models[name].smartphone) + "€";
		    var rp1 = radialProgress(document.getElementById(name), color1)
		            .diameter(150)
		            .value((models[name].smartphone/models[name].total)*100)
		            .render();
		}
	}

});
trainTimes = {};

trainTimes.ProcessTrainData = function() {

	var file = document.getElementById('trainData').files[0];
	var times = [];
  	var reader = new FileReader();
  	reader.onload = function(event) {
  		var data = event.target.result.split('\r\n');
  		var date = new Date(0);

  		//-2 because the last line appears to be empty
  		for(i = 1; i <= data.length-2; i++){
  			var dataPoints = data[i].split(',');
  			var localdate = date.setUTCSeconds(dataPoints[4]);
  			times.push({
  				TrainName : dataPoints[3],
  				// DepartureTime :  localdate.setSeconds(localdate.getSeconds() + dataPoints[5])
  			});
  		};
  		console.log(times);
  	};

  reader.readAsText(file);
};

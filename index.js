trainTimes = {};

trainTimes.ProcessTrainData = function() {

	var file = document.getElementById('trainData').files[0];
	var times = [];
  	var reader = new FileReader();
  	reader.onload = function(event) {
  		var data = event.target.result.split('\r\n');

  		//-2 because the last line appears to be empty
  		for(i = 1; i <= data.length-2; i++){
  			var dataPoints = data[i].split(',');
			var date = trainTimes.ConvertTrainTime(dataPoints[4],dataPoints[5]);
  			times.push({
  				TrainName : dataPoints[3],
  				DepartureTime :  date
  			});
  		};
  		console.log(times);
  	};

  reader.readAsText(file);
};

trainTimes.ConvertTrainTime = function(scheduledTime, lateness){
  			var date = new Date(0);
  			date.setUTCSeconds(scheduledTime);
  			date.setSeconds(date.getSeconds() + lateness);
  			return date;
};
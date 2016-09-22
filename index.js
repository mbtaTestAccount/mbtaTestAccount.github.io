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
  		trainTimes.DisplayTimes(times);
  	};

  reader.readAsText(file);
};

trainTimes.ConvertTrainTime = function(scheduledTime, lateness){
  			var date = new Date(0);
  			date.setUTCSeconds(scheduledTime);
  			date.setSeconds(date.getSeconds() + lateness);
  			return date;
};

trainTimes.DisplayTimes = function(times){
	var displayBody = document.getElementById('times');

	for(var i=0; i <= times.length-1; i++)
	{
		var nameDiv = document.createElement("DIV");
		var nameText = document.createTextNode(times[i].TrainName);
		nameDiv.appendChild(nameText);
		displayBody.appendChild(nameDiv);

		var timeDiv = document.createElement("DIV");
		var timeText = document.createTextNode(times[i].DepartureTime);
		timeDiv.appendChild(timeText);
		displayBody.appendChild(timeDiv	);
	}
};
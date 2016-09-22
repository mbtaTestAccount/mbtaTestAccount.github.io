trainTimes = {};

trainTimes.ProcessTrainData = function() {

	var file = document.getElementById('trainData').files[0];

  	var reader = new FileReader();
  	reader.onload = function(event) {
  		var data = event.target.result.split('\r\n');
  		alert(data[0]);
  		alert(data[1]);
  		alert(data[2]);
  		alert(data.length);
  };

  reader.readAsText(file);
};

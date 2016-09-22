trainTimes = {};

trainTimes.ProcessTrainData = function() {
	var fileInput = document.getElementById('trainData').files[0];

	alert(fileInput.name);
	alert(fileInput.size);
	alert(fileInput.type);
	// if(fileInput){
	// 	var FileReader = new FileReader();
	// 	FileReader.onload = function(loadTarget){
	// 		var content = loadTarget.target.result;
	// 		alert(content.substr(1,10));
	// 	}
	// }
};



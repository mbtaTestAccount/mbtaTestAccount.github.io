trainTimes = {};

trainTimes.ProcessTrainData = function() {

	var file = document.getElementById('trainData').files[0];

  	var reader = new FileReader();
  	reader.onload = function(event) {
    // The file's text will be printed here
    console.log(event.target.result)
  };

  reader.readAsText(file);



	// alert(fileInput.name);
	// alert(fileInput.size);
	// alert(fileInput.type);
	// if(fileInput){
	// 	var FileReader = new FileReader();
	// 	FileReader.onload = function(loadTarget){
	// 		var content = loadTarget.target.result;
	// 		alert(content.substr(1,10));
	// 	}
	// }
};

trainTimes.onChange = function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // The file's text will be printed here
    console.log(event.target.result)
  };

  reader.readAsText(file);
}


			function readTextFile() {
			  var rawFile = new XMLHttpRequest();
			  rawFile.open("GET", "log.log", true);
			  rawFile.onreadystatechange = function() {
				if (rawFile.readyState === 4) {
				  var allText = rawFile.responseText;
				  document.getElementById("textSection").innerHTML = allText;
				}
			  }
			  rawFile.send();
			}
			function readTextFile2() {
			  var rawFile = new XMLHttpRequest();
			  rawFile.open("GET", "ssh_log.log", true);
			  rawFile.onreadystatechange = function() {
				if (rawFile.readyState === 4) {
				  var allText = rawFile.responseText;
				  document.getElementById("textSection2").innerHTML = allText;
				}
			  }
			  rawFile.send();
			}
                        function readTextFile3() {
                          var rawFile = new XMLHttpRequest();
                          rawFile.open("GET", "fucked_log.log", true);
                          rawFile.onreadystatechange = function() {
                                if (rawFile.readyState === 4) {
                                  var allText = rawFile.responseText;
                                  document.getElementById("textSection3").innerHTML = allText;
                                }
                          }
                          rawFile.send();
                        }


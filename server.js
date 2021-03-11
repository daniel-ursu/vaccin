const fetch = require("node-fetch");

var pages = [];
for (var i = 1; i <= 30; i++) {
  pages.push(i);
}

var places = [];
for (var page of pages) {
	var url = "https://programare.vaccinare-covid.gov.ro/scheduling/api/centres?page=" + page + "&size=20&sort=,"
	//console.log(url)
  fetch(url, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,ro;q=0.8",
      "content-type": "application/json",
      "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "SESSION=ZTBkOWJhZDItYjQ3Ny00Yzg3LWI2NjYtYzg3NjBkNWQ1ZDVl"
    },
    "referrer": "https://programare.vaccinare-covid.gov.ro/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"countyID\":null,\"localityID\":null,\"name\":null,\"identificationCode\":\"1821005012654\",\"masterPersonnelCategoryID\":-4,\"personnelCategoryID\":32,\"recipientID\":4186562}",
	//UNCOMMENT THIS TO SEE STAGE 2 DATA AND COMMENT THE ABOVE
	//"body": "{\"countyID\":null,\"localityID\":null,\"name\":null,\"identificationCode\":\"2300714040012\",\"masterPersonnelCategoryID\":-2,\"personnelCategoryID\":14,\"recipientID\":1246794}",
    "method": "POST",
    "mode": "cors"
  }).then(res => res.json())
    .then(json => {
      var content = json.content;
	  var placesLength = places.length;
      for (var c of content) {
        if (c.availableSlots > 0) {
			places.push(c)
			console.log(c);
		  
        }
		
      }
	  if(placesLength !== places.length) {
		console.log("Total Locuri: ", places.length)
	  }
	  
    })
}

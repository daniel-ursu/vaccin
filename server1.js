const fetch = require("node-fetch");


var counties = [12]

function task() {

    fetch("https://programare.vaccinare-covid.gov.ro/scheduling/api/centres?page=0&size=20&sort=,", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,ro;q=0.8",
        "content-type": "application/json",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "SESSION=NDM0NDU2NzAtOGU0NC00NjJiLWEyMjEtMzlkZjY3NTczMDVh"
      },
      "referrer": "https://programare.vaccinare-covid.gov.ro/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"countyID\":12,\"localityID\":null,\"name\":null,\"identificationCode\":\"2830408226713\",\"masterPersonnelCategoryID\":-4,\"personnelCategoryID\":32,\"recipientID\":4186562}",
      "method": "POST",
      "mode": "cors"
    }).then(res => res.json())
      .then(json => {
        var content = json.content;
        for (var c of content) {
          if (c.availableSlots > 0) {
            console.log(c);
            console.log('\u0007');
          }
        }
		console.log("-------------------------------")
      })

};

setInterval(task, 10000);
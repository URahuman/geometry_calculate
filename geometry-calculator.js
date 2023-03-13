console.log("geometry-calculator.js is loading")

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


document.getElementById('submit-button').addEventListener('click', function () {
    // console.log("You finally clicked without jQuery");
    var Radius = parseFloat(document.getElementById("radius-input").value)
    var Length1 = parseFloat(document.getElementById("small-length-input").value)
    var Length2 = parseFloat(document.getElementById("big-length-input").value)
    console.log(typeof (Radius), Length1, Length2)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('Access-Control-Allow-Origin', '*');

    var raw = JSON.stringify({
        "Radius": Radius,
        "Length1": Length1,
        "Length2": Length2
    });

    var settings = {
        "url": "https://kjpz9nvzz1.execute-api.ap-south-1.amazonaws.com/default/geometry-calculation",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "Radius": Radius,
          "Length1": Length1,
          "Length2": Length2
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        $("#result-degree")[0].innerText = parseFloat(response["body-json"]["message"]).toFixed(3)
      });
});
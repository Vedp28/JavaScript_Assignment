/*
    Assignment #4
    {Ved Patil}
*/

    $(function () {
        navigator.geolocation.getCurrentPosition(success, () => {
            console.log("Please enable geolocation in order to see your coordinates");
    
        });
    
    });
         function success(position) {
            console.log("Position object: ", position);
            console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
            $("div#locationhere").html("latitude: " + position.coords.latitude+ "<br>" + "  longitude: " + position.coords.longitude);

            if(localStorage.getItem("latitude")) {
            let a = localStorage.getItem("latitude");
            let b = JSON.parse(a);
            localStorage.setItem("latitude", b);

            let c = localStorage.getItem("longitude");
            let d = JSON.parse(c);
            localStorage.setItem("longitude", d);

            $('#content').append("<h2>Old Location!!</h2>" , "Latitude: " , a , "<br>" , "Longitude: " , c);
           $('#content').append("<h2>Welcome Back to the page</h2>");
           $('#content').append("<h4>You travelled this much: " + calcDistanceBetweenPoints(a,c,position.coords.latitude,position.coords.longitude)+ " meters" + "</h4>");
           //localStorage.clear();
           }
           else {
            $('#content').append("<h2>Welcome to the page for the First Time</h2>");
           }
        }

            



    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }



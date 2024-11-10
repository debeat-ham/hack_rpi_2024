
class ParkingGarage{
    constructor(lat_, lon_) {
        this.lat = lat_;
        this.lon = lon_;
        this.name = '';
        this.address = '';
        this.capacity = -1;
        this.freeSpaces = -1;
        this.distanceFromUser = -1;
        this.cost = -1;
      }
}

function findClosest(userLat, userLng) {
    var garageData = data;
    garageData.sort((a,b) => calculateDistance(userLat, userLng, b.Latitude, b.Longitude) - calculateDistance(userLng, userLng, a.Latitude, a.Longitude))
    
    var closest_five = [];
    var count = 0;
    // Loop through each object in the database
    for (var i = 0; count < 5; ++i) {
        var garageLat = garageData[i].Latitude;
        var garageLng = garageData[i].Longitude;

        //Garage has invalid Lat or Lng
        if (!garageLat || !garageLng) continue;

        //Otherwise increment the number of valid garages to ensure we have 5
        ++count
        var garageAddress = garageData[i]["Building Number"] + " " + garageData[i].Street1 + " " + garageData[i].City + " " + garageData[i].State + " " + garageData[i]["ZIP Code"];
        var garageName = garageData[i]["Business Name"];
        var garageCapacity = (garageData[i].Details.split(' '))[2].slice(0, -1);
        var garageDistanceFromUser = calculateDistance(userLat, userLng, garageLat, garageLng);

        currentGarage  = new ParkingGarage(garageLat, garageLng);
        currentGarage.address = garageAddress;
        currentGarage.name = garageName;
        currentGarage.distanceFromUser = garageDistanceFromUser.toFixed(2);
        currentGarage.capacity = garageCapacity;

        console.log("Closest Garage Name: " + currentGarage.name);
        console.log("Address: " + currentGarage.address);
        console.log("Distance: " + currentGarage.distanceFromUser + " miles");
        console.log("Capacity: " + currentGarage.capacity + " spaces");
        console.log("Cost: $" + currentGarage.price )
        closest_five.push(currentGarage);
    }

    return closest_five;
}   

// Haversine formula to calculate the distance between two points in miles
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 3958.8; // Radius of the Earth in miles
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var distance = R * c; // Distance in miles
    return distance;
}

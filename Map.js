function initMap() {
    // Define the initial center location (e.g., a central spot in the Bronx)
    const bronxCenter = { lat: 40.837048, lng: -73.865433 }; // Example coordinates

    // Initialize the map centered on the Bronx
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: bronxCenter
    });

    // Array of parking lot locations with their info
    const parkingLocations = [
        { "lat": 40.839968, "lng": -73.864474, "info": "GMH PARK INC: 94 spots, $9/hr" },
        { "lat": 40.8634, "lng": -73.897679, "info": "MP CRESTON LLC: 66 spots, $7/hr" },
        { "lat": 40.839968, "lng": -73.864474, "info": "RIVERBAY CORPORATION: 1361 spots, $12/hr" },
        { "lat": 40.85209, "lng": -73.905403, "info": "II IN-LOT PARKING CORP: 40 spots, $8/hr" },
        { "lat": 40.81434, "lng": -73.917762, "info": "DANAE MARRERO: 31 spots, $5/hr" },
        { "lat": 40.81481, "lng": -73.925145, "info": "786 PARKING 1 CORP: 68 spots, $6/hr" },
        { "lat": 40.8503, "lng": -73.917327, "info": "SAN MIGUEL PARK CORP: 125 spots, $7/hr" },
        { "lat": 40.86449, "lng": -73.829741, "info": "PARKING SYSTEMS PLUS INC: 998 spots, $10/hr" },
        { "lat": 40.85123, "lng": -73.913306, "info": "1840 PARKING LOT L.L.C.: No capacity available, $8/hr" },
        { "lat": 40.850911, "lng": -73.927849, "info": "W 183 ST. PARKING INC.: 54 spots, $8/hr" },
        { "lat": 40.839968, "lng": -73.864474, "info": "HGI PARKING: 94 spots, $9/hr" },
        { "lat": 40.85901, "lng": -73.89934, "info": "UNIVERSAL PARKING LLC: 60 spots, $9/hr" },
        { "lat": 40.85901, "lng": -73.89934, "info": "UNIVERSAL PARKING LLC: 60 spots, $7/hr" },
        { "lat": 40.8121, "lng": -73.92656, "info": "AARON PARKING CORP: 300 spots, $6/hr" },
        { "lat": 40.842923, "lng": -73.865206, "info": "DAMARE, KEVIN: 103 spots, $5/hr" },
        { "lat": 40.82266, "lng": -73.907772, "info": "STADIUM PARKING LLC: 5000 spots, $15/hr" },
        { "lat": 40.861241, "lng": -73.899288, "info": "BIG APPLE PARKING LLC: 125 spots, $10/hr" },
        { "lat": 40.8121, "lng": -73.92656, "info": "BCE PARKING LLC: 300 spots, $6/hr" },
        { "lat": 40.810851, "lng": -73.926124, "info": "UNIVERSAL PARKING LLC: 120 spots, $7/hr" },
        { "lat": 40.81802, "lng": -73.9146, "info": "CHERAN, CHRISTOPHER: 72 spots, $5/hr" },
        { "lat": 40.838959, "lng": -73.867529, "info": "RIVERSIDE GARAGE, INC.: 44 spots, $9/hr" },
        { "lat": 40.842923, "lng": -73.865206, "info": "PARKCHESTER GARAGE, INC.: 103 spots, $8/hr" },
        { "lat": 40.861241, "lng": -73.899288, "info": "CAPE PARKING CORP: 125 spots, $10/hr" },
        { "lat": 40.863203, "lng": -73.89156, "info": "UNIVERSAL PARKING LLC: 33 spots, $9/hr" },
        { "lat": 40.863203, "lng": -73.89156, "info": "RIDGE PARKING, LLC: 33 spots, $7/hr" },
        { "lat": 40.835895, "lng": -73.91055, "info": "HARLEM RIVER YARD VENTURE INC: 215 spots, $10/hr" },
        { "lat": 40.863203, "lng": -73.89156, "info": "TONY PARKING LLC: 33 spots, $8/hr" },
        { "lat": 40.819909, "lng": -73.92424, "info": "MORGAN MARIN, JR.: 120 spots, $6/hr" },
        { "lat": 40.839968, "lng": -73.864474, "info": "GMH PARK INC: 94 spots, $9/hr" },
        { "lat": 40.817028, "lng": -73.921593, "info": "RODMAN GARAGE LLC: 42 spots, $7/hr" }
    ];

    var arr = [Infinity];

    // Loop through the parking locations to create markers with info windows
    parkingLocations.forEach((location) => {

        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map
        });

        // Info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: location.info
        });

        // Show info window on marker click
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// Load the map after the page loads
window.onload = initMap;
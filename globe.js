// Set the Cesium Ion access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNjk2OTJkMi0xN2RkLTRiM2EtODVhNC04MWJhNmZkZTA5OGYiLCJpZCI6MjIwMjUzLCJpYXQiOjE3MTc1ODEyMzd9.tw7fsP4YUwP4gINlzwbQqOy6ZrZ10J8wGFVuwiG7CZQ';


// Initialize the Cesium Viewer
var viewer = new Cesium.Viewer('cesiumContainer');

// Create a ScreenSpaceEventHandler
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

// Set up the click event handler
handler.setInputAction(function (movement) {
    // Get the Cartesian coordinates of the click position
    var cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);
    if (cartesian) {
        // Convert Cartesian to Cartographic coordinates
        var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
        // Convert radians to degrees
        var latitude = Cesium.Math.toDegrees(cartographic.latitude);
        var longitude = Cesium.Math.toDegrees(cartographic.longitude);
        
        // Log the coordinates
        console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
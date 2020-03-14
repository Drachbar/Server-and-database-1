if ("geolocation" in navigator) {
  /* geolocation is available */
  console.log("Geolocation is available");
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });
} else {
  console.log("geolocation is not available!");
}

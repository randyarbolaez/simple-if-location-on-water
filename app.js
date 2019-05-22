let ifOnWater = document.getElementById('if-on-water');

function blah() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function showPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude);
      fetch(
        `https://api.onwater.io/api/v1/results/${latitude},${longitude}?access_token=dxxET77H91hxxaB3xuGC`
      )
        .then(res => res.json())
        .then(res => {
          let water = res.water;
          if (water) {
            ifOnWater.innerHTML = 'Location is in water';
          } else {
            ifOnWater.innerHTML = 'Location is not in water';
          }
          console.log(water);
        });
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

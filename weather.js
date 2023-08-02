// script.js
document.addEventListener("DOMContentLoaded", function () {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
    

          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((response) => response.json())
            .then((data) => {
              const locationName = data.address.city;
              console.log("Current Location: ",locationName);
              
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
            });
        },
        function (error) {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
      
    }
    
  });

  function search(){
    locationName=searchInput.value
    console.log(locationName)

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=b41ec3be35c7dac8aabbc21ba253137a`).then((data)=>data.json()).then((data)=>{

      const weatherDescription = data.weather[0].main;
        temp= data.main.temp;
        console.log(temp);
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        deg=Math.round((temp-32)*(5/9))
        tem.innerHTML=deg
        wet.innerHTML=weatherDescription
        humi.innerHTML=humidity
        speed.innerHTML=windSpeed
      })
      const weatherDetailsCard = document.getElementById("weather-details-card");
  weatherDetailsCard.style.display = "block"; // Show the weather details card
  }
  
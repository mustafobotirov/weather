

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=urgench&aqi=no')
 
   
 .then((response) => {
    return response.json()
 })

 .then((result) => {
    console.dir(result)
    document.getElementById('city-khorezm').textContent = result.location.region
   document.getElementById('count-uzbekistan').textContent = result.location.country
    document.getElementById('temp').textContent = result.current.temp_c
    document.getElementById('icon').setAttribute('src', result.current.condition.icon)
    document.getElementById('wind').textContent = result.current.wind_mph
    document.getElementById('humidity').textContent = result.current.humidity
    document.getElementById('cloud').textContent = result.current.cloud
    document.getElementById('feelslike_c').textContent = result.current.feelslike_c
  
 })

 fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=tashkent&aqi=no')

 .then((response) => {
   return response.json()
})

.then((result) => {
   document.getElementById('cloud-2').textContent = result.current.cloud
   document.getElementById('temp-2').textContent = result.current.temp_c
   document.getElementById('humidity-2').textContent = result.current.humidity
   document.getElementById('wind-2').textContent = result.current.wind_mph
   document.getElementById('icon-2').setAttribute('src', result.current.condition.icon)
   document.getElementById('city-tashkent').textContent = result.location.region
   document.getElementById('count-uzbekistan-2').textContent = result.location.country
   document.getElementById('feelslike_c-2').textContent = result.current.feelslike_c
   
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=andijon&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-3').textContent = result.current.cloud
  document.getElementById('temp-3').textContent = result.current.temp_c
  document.getElementById('humidity-3').textContent = result.current.humidity
  document.getElementById('wind-3').textContent = result.current.wind_mph
  document.getElementById('icon-3').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-namangan').textContent = result.location.region
  document.getElementById('count-uzbekistan-3').textContent = result.location.country
  document.getElementById('feelslike_c-3').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=buxoro&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-4').textContent = result.current.cloud
  document.getElementById('temp-4').textContent = result.current.temp_c
  document.getElementById('humidity-4').textContent = result.current.humidity
  document.getElementById('wind-4').textContent = result.current.wind_mph
  document.getElementById('icon-4').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-buxoro').textContent = result.location.region
  document.getElementById('count-uzbekistan-4').textContent = result.location.country
  document.getElementById('feelslike_c-4').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=navoiy&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-5').textContent = result.current.cloud
  document.getElementById('temp-5').textContent = result.current.temp_c
  document.getElementById('humidity-5').textContent = result.current.humidity
  document.getElementById('wind-5').textContent = result.current.wind_mph
  document.getElementById('icon-5').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-navoiy').textContent = result.location.region
  document.getElementById('count-uzbekistan-5').textContent = result.location.country
  document.getElementById('feelslike_c-5').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=samarqand&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-6').textContent = result.current.cloud
  document.getElementById('temp-6').textContent = result.current.temp_c
  document.getElementById('humidity-6').textContent = result.current.humidity
  document.getElementById('wind-6').textContent = result.current.wind_mph
  document.getElementById('icon-6').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-sirdaryo').textContent = result.location.region
  document.getElementById('count-uzbekistan-6').textContent = result.location.country
  document.getElementById('feelslike_c-6').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=jizzakh&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-7').textContent = result.current.cloud
  document.getElementById('temp-7').textContent = result.current.temp_c
  document.getElementById('humidity-7').textContent = result.current.humidity
  document.getElementById('wind-7').textContent = result.current.wind_mph
  document.getElementById('icon-7').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-jizzax').textContent = result.location.region
  document.getElementById('count-uzbekistan-7').textContent = result.location.country
  document.getElementById('feelslike_c-7').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=qashqadaryo&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-8').textContent = result.current.cloud
  document.getElementById('temp-8').textContent = result.current.temp_c
  document.getElementById('humidity-8').textContent = result.current.humidity
  document.getElementById('wind-8').textContent = result.current.wind_mph
  document.getElementById('icon-8').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-qashqadaryo').textContent = result.location.region
  document.getElementById('count-uzbekistan-8').textContent = result.location.country
  document.getElementById('feelslike_c-8').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=turkey&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-9').textContent = result.current.cloud
  document.getElementById('temp-9').textContent = result.current.temp_c
  document.getElementById('humidity-9').textContent = result.current.humidity
  document.getElementById('wind-9').textContent = result.current.wind_mph
  document.getElementById('icon-9').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-turkey').textContent = result.location.region
  document.getElementById('count-uzbekistan-9').textContent = result.location.country
  document.getElementById('feelslike_c-9').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=istanbul&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-10').textContent = result.current.cloud
  document.getElementById('temp-10').textContent = result.current.temp_c
  document.getElementById('humidity-10').textContent = result.current.humidity
  document.getElementById('wind-10').textContent = result.current.wind_mph
  document.getElementById('icon-10').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-ist').textContent = result.location.region
  document.getElementById('count-uzbekistan-10').textContent = result.location.country
  document.getElementById('feelslike_c-10').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=edinburg&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-11').textContent = result.current.cloud
  document.getElementById('temp-11').textContent = result.current.temp_c
  document.getElementById('humidity-11').textContent = result.current.humidity
  document.getElementById('wind-11').textContent = result.current.wind_mph
  document.getElementById('icon-11').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-london').textContent = result.location.region
  document.getElementById('count-uzbekistan-11').textContent = result.location.country
  document.getElementById('feelslike_c-11').textContent = result.current.feelslike_c
  
})

fetch('http://api.weatherapi.com/v1/current.json?key=37f03a30f16745a89fa92731221012&q=manchester&aqi=no')

.then((response) => {
  return response.json()
})

.then((result) => {
  document.getElementById('cloud-12').textContent = result.current.cloud
  document.getElementById('temp-12').textContent = result.current.temp_c
  document.getElementById('humidity-12').textContent = result.current.humidity
  document.getElementById('wind-12').textContent = result.current.wind_mph
  document.getElementById('icon-12').setAttribute('src', result.current.condition.icon)
  document.getElementById('city-man').textContent = result.location.region
  document.getElementById('count-uzbekistan-12').textContent = result.location.country
  document.getElementById('feelslike_c-12').textContent = result.current.feelslike_c
  
})
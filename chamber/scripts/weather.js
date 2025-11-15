
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=South%20Jordan&units=imperial&appid=a9a6fcc7253378aa3fa145c35cf3c3c0';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      currentTemp.textContent = `${Math.round(data.main.temp)}°F`;

      const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.setAttribute('src', iconSrc);
      weatherIcon.setAttribute('alt', data.weather[0].description);
      captionDesc.textContent = data.weather[0].description;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log('Weather fetch error:', error);
  }
}
apiFetch();

import { useState, useEffect } from "react";

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [spot, setSpot] = useState(null);
  const [term, setTerm] = useState("");
  const [options, setOptions] = useState([]);
  const [currentSurf, setCurrentSurf] = useState(null);
  const [currentSpotConditions, setCurrentSpotConditions] = useState(null);
  const [forecastSurf, setForecastSurf] = useState(null);
  const [swell, setSwell] = useState(null);
  const [wind, setWind] = useState(null);
  const [tide, setTide] = useState(null);
  const [weather, setWeather] = useState(null);
  const [rating, setRating] = useState(null);
  const [sunlight, setSunlight] = useState(null);

  //get search options on every keystroke of input field
  function onInputChange(e) {
    const value = e.target.value.trim();
    setTerm(e.target.value);

    if (value !== "") {
      getSearchOptions(value);
    }
  }

  //get search options on input change
  async function getSearchOptions(term) {
    const response = await fetch(
      `${
        process.env.REACT_APP_SEARCH_BASE_URL
      }?q=${term.trim()}&querysize=10&suggestionSize=10&newsSearch=false`
    );

    const searchOptions = await response.json();

    setOptions(searchOptions[0].hits.hits);
  }

  //set spot to option that was clicked/selected

  function onOptionSelect(option) {
    setSpot(option);
  }

  //submit selected spot to obtain spot data

  function onSubmit() {
    getSurfData(spot);
  }

  //get current surf conditions of spot that was selected

  function getSurfData(spot) {
    setLoading(true);
    const currentSurfFetch = fetch(
      `${process.env.REACT_APP_CURRENT_SURF_BASE_URL}?cacheEnabled=true&units%5BswellHeight%5D=FT&units%5Btemperature%5D=F&units%5BtideHeight%5D=FT&units%5BwaveHeight%5D=HI&units%5BwindSpeed%5D=MPH&spotIds=${spot._id}&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const currentSpotConditionsFetch = fetch(
      `https://services.surfline.com/kbyg/spots/reports?spotId=${spot._id}&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const forecastSurfFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/surf?cacheEnabled=true&days=16&intervalHours=1&spotId=${spot._id}&units%5BwaveHeight%5D=HI&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const swellFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/swells?cacheEnabled=true&days=16&intervalHours=1&spotId=${spot._id}&units%5BswellHeight%5D=FT&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const windFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/wind?spotId=${spot._id}&days=16&intervalHours=1&corrected=true&cacheEnabled=true&units%5BwindSpeed%5D=MPH&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const tideFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/tides?spotId=${spot._id}&days=17&cacheEnabled=true&units%5BtideHeight%5D=FT&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const weatherFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/weather?spotId=${spot._id}&days=16&intervalHours=1&cacheEnabled=true&units%5Btemperature%5D=F&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const ratingFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/rating?spotId=${spot._id}&days=16&intervalHours=1&cacheEnabled=true&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );
    const sunlightFetch = fetch(
      `${process.env.REACT_APP_FORECAST_SURF_BASE_URL}/sunlight?spotId=${spot._id}&days=16&intervalHours=1&accesstoken=${process.env.REACT_APP_ACCESS_TOKEN}`
    );

    Promise.all([
      currentSurfFetch,
      currentSpotConditionsFetch,
      forecastSurfFetch,
      swellFetch,
      windFetch,
      tideFetch,
      weatherFetch,
      ratingFetch,
      sunlightFetch,
    ])
      .then(async (response) => {
        const currentSurfResponse = await response[0].json();
        const currentSpotConditionsResponse = await response[1].json();
        const forecastSurfResponse = await response[2].json();
        const swellResponse = await response[3].json();
        const windResponse = await response[4].json();
        const tideResponse = await response[5].json();
        const weatherResponse = await response[6].json();
        const ratingResponse = await response[7].json();
        const sunlightResponse = await response[8].json();

        setCurrentSurf(currentSurfResponse);
        setCurrentSpotConditions(currentSpotConditionsResponse);
        setForecastSurf(forecastSurfResponse);
        setSwell(swellResponse);
        setWind(windResponse);
        setTide(tideResponse);
        setWeather(weatherResponse);
        setRating(ratingResponse);
        setSunlight(sunlightResponse);

        setLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (spot) {
      setTerm(spot._source.name);
      setOptions([]);
    }
  }, [spot]);

  return {
    loading,
    currentSurf,
    currentSpotConditions,
    forecastSurf,
    swell,
    wind,
    tide,
    weather,
    rating,
    sunlight,
    options,
    term,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
}

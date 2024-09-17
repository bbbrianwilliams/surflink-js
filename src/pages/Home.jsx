import { useState } from "react";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
import ForeCastSurf from "../components/ForecastSurf";
import CurrentSpotConditions from "../components/CurrentSpotConditions";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const {
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
    onOptionSelect,
    onSubmit,
    onInputChange,
  } = useFetch();
  return (
    <div className="flex justify-center items-center h-full w-full">
      {loading ? (
        <div>Loading...</div>
      ) : currentSpotConditions ? (
        <div className="flex flex-col">
          <Search
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
          <CurrentSpotConditions currentSpotData={currentSpotConditions} />
          <ForeCastSurf forecastSurf={forecastSurf} forecastWind={wind} forecastSwell={swell} />
        </div>
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

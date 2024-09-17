import {
  getRatingColor,
  getTimestampClockTime,
  getWindDirection,
  convertTime,
} from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faLocationArrow,
  faDownLong,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

export default function CurrentSpotConditions({ currentSpotData }) {
  const { conditions, swells, tide, waterTemp, waveHeight, weather, wind } =
    currentSpotData.forecast;

  return (
    <>
      <div className="w-full py-10 h-full md:max-w-[500px] lg:h-auto rounded">
        <div className="mx-auto w-[300px] md:max-w-[500px] bg-purple-300">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-5">
              {currentSpotData.spot.name}
            </h3>
            <h2>Surf Height</h2>
            <h1 className="font-bold text-2xl mb-3">
              {waveHeight.min}-{waveHeight.max}ft
            </h1>
            <p>{waveHeight.humanRelation}</p>
            <div
              style={{
                backgroundColor: `#${getRatingColor(conditions.value)}`,
              }}
              className={`w-full h-3 rounded mt-1`}
            ></div>
          </div>
        </div>
        <div className="mx-auto w-[300px] bg-blue-400">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Swell Info</h3>
            {swells.slice(0, 3).map((swellItem, index) => (
              <div key={index}>
                {swellItem.height !== 0
                  ? `${swellItem.height}ft @ ${
                      swellItem.period
                    } secs from ${Math.round(swellItem.direction)}°`
                  : null}{" "}
                {swellItem.height !== 0 ? (
                  <FontAwesomeIcon
                    icon={faDownLong}
                    style={{ transform: `rotateZ(${swellItem.direction}deg)` }}
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-5">Wind</h3>
            <p>
              <strong className="text-2xl">{Math.round(wind.speed)}</strong>mph{" "}
              {wind.directionType}
            </p>{" "}
            <div>
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{ transform: `rotateZ(${wind.direction}deg)` }}
                size="3x"
              />
            </div>
            {getWindDirection(Math.round(wind.direction))}{" "}
            <p>{Math.round(wind.gust)}mph gusts</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-5">Tide</h3>
            <p>
              {tide.current.height}ft as of{" "}
              {convertTime(tide.current.timestamp)}
            </p>
            <p>
              {tide.next.height}ft {tide.next.type.toLowerCase()} at{" "}
              {convertTime(tide.next.timestamp)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

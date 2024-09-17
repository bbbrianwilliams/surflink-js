import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SurfInfoTile from "./SurfInfoTile";
import { useEffect, useState } from "react";
import {
  getTimestampHour,
  everyNth,
  getTimestampClockTime,
  getDayOfWeek,
  getTodayForecast,
  getRatingColor,
  getWindDirection,
  convertTime,
} from "../helpers";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function ForeCastSurf({
  forecastSurf,
  ratingData,
  forecastSwell,
  forecastWind,
}) {
  const [dayData, setDayData] = useState(null);

  const surf = forecastSurf.data.surf;

  const swells = forecastSwell.data.swells;

  const wind = forecastWind.data.wind;

  function getUpdateToday(getSurfForecast, getSwellForecast, getWindForecast) {
    const dayData = [
      {
        dayOfWeek: getDayOfWeek(getSurfForecast[0].timestamp),
        sixHourObservations: [
          {
            time: "6am",
            surf: {
              min: getSurfForecast[6].surf.min,
              max: getSurfForecast[6].surf.max,
              humanRelation: getSurfForecast[6].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[6].swells[0].height,
              period: getSwellForecast[6].swells[0].period,
              direction: getSwellForecast[6].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[6].speed,
              direction: getWindForecast[6].direction,
              directionType: getWindForecast[6].directionType,
            },
          },
          {
            time: "12pm",
            surf: {
              min: getSurfForecast[12].surf.min,
              max: getSurfForecast[12].surf.max,
              humanRelation: getSurfForecast[12].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[12].swells[0].height,
              period: getSwellForecast[12].swells[0].period,
              direction: getSwellForecast[12].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[12].speed,
              direction: getWindForecast[12].direction,
              directionType: getWindForecast[12].directionType,
            },
          },
          {
            time: "6pm",
            surf: {
              min: getSurfForecast[18].surf.min,
              max: getSurfForecast[18].surf.max,
              humanRelation: getSurfForecast[18].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[18].swells[0].height,
              period: getSwellForecast[18].swells[0].period,
              direction: getSwellForecast[18].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[18].speed,
              direction: getWindForecast[18].direction,
              directionType: getWindForecast[18].directionType,
            },
          },
        ],
      },
      {
        dayOfWeek: getDayOfWeek(getSurfForecast[24].timestamp),
        sixHourObservations: [
          {
            time: "6am",
            surf: {
              min: getSurfForecast[30].surf.min,
              max: getSurfForecast[30].surf.max,
              humanRelation: getSurfForecast[30].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[30].swells[0].height,
              period: getSwellForecast[30].swells[0].period,
              direction: getSwellForecast[30].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[30].speed,
              direction: getWindForecast[30].direction,
              directionType: getWindForecast[30].directionType,
            },
          },
          {
            time: "12pm",
            surf: {
              min: getSurfForecast[36].surf.min,
              max: getSurfForecast[36].surf.max,
              humanRelation: getSurfForecast[36].humanRelation,
            },
            swell: {
              height: getSwellForecast[36].swells[0].height,
              period: getSwellForecast[36].swells[0].period,
              direction: getSwellForecast[36].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[36].speed,
              direction: getWindForecast[36].direction,
              directionType: getWindForecast[36].directionType,
            },
          },
          {
            time: "6pm",
            surf: {
              min: getSurfForecast[42].surf.min,
              max: getSurfForecast[42].surf.max,
              humanRelation: getSurfForecast[42].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[42].swells[0].height,
              period: getSwellForecast[42].swells[0].period,
              direction: getSwellForecast[42].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[42].speed,
              direction: getWindForecast[42].direction,
              directionType: getWindForecast[42].directionType,
            },
          },
        ],
      },
      {
        dayOfWeek: getDayOfWeek(getSurfForecast[48].timestamp),
        sixHourObservations: [
          {
            time: "6am",
            surf: {
              min: getSurfForecast[54].surf.min,
              max: getSurfForecast[54].surf.max,
              humanRelation: getSurfForecast[54].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[54].swells[0].height,
              period: getSwellForecast[54].swells[0].period,
              direction: getSwellForecast[54].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[54].speed,
              direction: getWindForecast[54].direction,
              directionType: getWindForecast[54].directionType,
            },
          },
          {
            time: "12pm",
            surf: {
              min: getSurfForecast[60].surf.min,
              max: getSurfForecast[60].surf.max,
              humanRelation: getSurfForecast[60].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[60].swells[0].height,
              period: getSwellForecast[60].swells[0].period,
              direction: getSwellForecast[60].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[60].speed,
              direction: getWindForecast[60].direction,
              directionType: getWindForecast[60].directionType,
            },
          },
          {
            time: "6pm",
            surf: {
              min: getSurfForecast[66].surf.min,
              max: getSurfForecast[66].surf.max,
              humanRelation: getSurfForecast[66].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[66].swells[0].height,
              period: getSwellForecast[66].swells[0].period,
              direction: getSwellForecast[66].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[66].speed,
              direction: getWindForecast[66].direction,
              directionType: getWindForecast[66].directionType,
            },
          },
        ],
      },
      {
        dayOfWeek: getDayOfWeek(getSurfForecast[72].timestamp),
        sixHourObservations: [
          {
            time: "6am",
            surf: {
              min: getSurfForecast[78].surf.min,
              max: getSurfForecast[78].surf.max,
              humanRelation: getSurfForecast[78].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[78].swells[0].height,
              period: getSwellForecast[78].swells[0].period,
              direction: getSwellForecast[78].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[78].speed,
              direction: getWindForecast[78].direction,
              directionType: getWindForecast[78].directionType,
            },
          },
          {
            time: "12pm",
            surf: {
              min: getSurfForecast[84].surf.min,
              max: getSurfForecast[84].surf.max,
              humanRelation: getSurfForecast[84].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[84].swells[0].height,
              period: getSwellForecast[84].swells[0].period,
              direction: getSwellForecast[84].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[84].speed,
              direction: getWindForecast[84].direction,
              directionType: getWindForecast[84].directionType,
            },
          },
          {
            time: "6pm",
            surf: {
              min: getSurfForecast[90].surf.min,
              max: getSurfForecast[90].surf.max,
              humanRelation: getSurfForecast[90].surf.humanRelation,
            },
            swell: {
              height: getSwellForecast[90].swells[0].height,
              period: getSwellForecast[90].swells[0].period,
              direction: getSwellForecast[90].swells[0].direction,
            },
            wind: {
              speed: getWindForecast[90].speed,
              direction: getWindForecast[90].direction,
              directionType: getWindForecast[90].directionType,
            },
          },
        ],
      },
    ];

    return dayData;
  }

  const getDayOfWeek = (timestamp) => {
    const a = new Date(timestamp * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[a.getDay()];

    return dayOfWeek;
  };

  const getTimestampHour = (getTimestamp) => {
    const timestamp = new Date(getTimestamp * 1000);

    let hours = timestamp.getHours();
    let timeHours;

    if (hours > 0 && hours <= 12) {
      timeHours = hours;
    } else if (hours > 12) {
      timeHours = hours - 12;
    } else if (hours === 0) {
      timeHours = "12";
    }

    return timeHours;
  };

  useEffect(() => {
    setDayData(getUpdateToday(surf, swells, wind));
  }, []);

  console.log(dayData);

  return (
    <>
      <div>
        <Accordion allowZeroExpanded>
          {dayData && dayData.length > 0
            ? dayData.map((dayItem, idx) => (
                <AccordionItem key={idx}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div>
                        <p>{dayItem.dayOfWeek}</p>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {/* 6am observation */}
                    <div className="grid grid-cols-4 auto-cols-auto gap-y-0 gap-x-4">
                      <div>
                        <p>{dayItem.sixHourObservations[0].time}</p>
                      </div>
                      <div>
                        <h3>Surf Height</h3>
                        <p>
                          {dayItem.sixHourObservations[0].surf.min}-
                          {dayItem.sixHourObservations[0].surf.max}ft
                        </p>
                      </div>
                      <div>
                        <h3>Primary Swell</h3>
                        <p>
                          {dayItem.sixHourObservations[0].swell.height.toFixed(1)}
                          ft @ {dayItem.sixHourObservations[0].swell.period}s
                          from{" "}
                          {Math.round(dayItem.sixHourObservations[0].swell.direction)}
                        </p>
                      </div>
                      <div>
                        <h3>Wind</h3>
                        <p>
                          {Math.round(
                            dayItem.sixHourObservations[0].wind.speed
                          )}
                          mph{" "}
                          {dayItem.sixHourObservations[0].wind.directionType}{" "}
                        </p>
                      </div>
                    </div>

                    {/* 12pm observation */}
                    <div className="grid grid-cols-4 auto-cols-auto gap-y-0 gap-x-4">
                      <div>
                        <p>{dayItem.sixHourObservations[1].time}</p>
                      </div>
                      <div>
                        <h3>Surf Height</h3>
                        <p>
                          {dayItem.sixHourObservations[1].surf.min}-
                          {dayItem.sixHourObservations[1].surf.max}ft
                        </p>
                      </div>
                      <div>
                        <h3>Primary Swell</h3>
                        <p>
                          {dayItem.sixHourObservations[1].swell.height.toFixed(1)}
                          ft @ {dayItem.sixHourObservations[1].swell.period}s
                          from{" "}
                          {Math.round(dayItem.sixHourObservations[1].swell.direction)}
                        </p>
                      </div>
                      <div>
                        <h3>Wind</h3>
                        <p>
                          {Math.round(
                            dayItem.sixHourObservations[1].wind.speed
                          )}
                          mph{" "}
                          {dayItem.sixHourObservations[1].wind.directionType}{" "}
                        </p>
                      </div>
                    </div>

                    {/* 6pm observation */}
                    <div className="grid grid-cols-4 auto-cols-auto gap-y-0 gap-x-4">
                      <div>
                        <p>{dayItem.sixHourObservations[2].time}</p>
                      </div>
                      <div>
                        <h3>Surf Height</h3>
                        <p>
                          {dayItem.sixHourObservations[2].surf.min}-
                          {dayItem.sixHourObservations[2].surf.max}ft
                        </p>
                      </div>
                      <div>
                        <h3>Primary Swell</h3>
                        <p>
                          {(dayItem.sixHourObservations[2].swell.height.toFixed(1))}
                          ft @ {dayItem.sixHourObservations[2].swell.period}s
                          from{" "}
                          {Math.round(dayItem.sixHourObservations[2].swell.direction)}
                        </p>
                      </div>
                      <div>
                        <h3>Wind</h3>
                        <p>
                          {Math.round(
                            dayItem.sixHourObservations[2].wind.speed
                          )}
                          mph{" "}
                          {dayItem.sixHourObservations[2].wind.directionType}{" "}
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))
            : null}
        </Accordion>
      </div>
    </>
  );
}

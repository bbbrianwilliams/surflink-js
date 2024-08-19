import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SurfInfoTile from "./SurfInfoTile";
import { useEffect, useState } from "react";
import { getTimestampHour, everyNth, getTimestampClockTime, getDayOfWeek } from "../helpers";

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
  currentData,
  forecastData,
  ratingData,
  swellData,
  windData,
  tideData,
  weatherData,
  sunlightData,
}) {
  const forecastSurfArray = forecastData.data.surf;

  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  const forecastSurfThirdHour = forecastSurfArray.filter((_, i) => {
    return i % 3 == 0;
  });

  const forecastSurfSixthHour = forecastSurfArray.filter((_, i) => {
    return i % 6 == 0;
  });

  const forecastSurfDaily = forecastSurfArray.filter((_, i) => {
    return i % 24 == 0;
  });

  console.log(forecastSurfDaily);

  

  return (
    <>
      <div className="flex overflow-x-scroll mt-4 pb-2 mb-5">
        {forecastSurfThirdHour.slice(0, 8).map((item, index) => (
          <div
            className="inline-block text-center w-[50px] flex-shrink-0"
            key={index}
          >
            <p>{getTimestampHour(item.timestamp)}</p>
            <p className="justify-between text-sm my-5 font-bold text-nowrap">
              {item.surf.max}ft
            </p>
          </div>
        ))}
      </div>
      <div>
        <label>Daily</label>
        <Accordion allowZeroExpanded>
          {forecastSurfDaily.slice(0, 4).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div>
                    <p>{getDayOfWeek(item.timestamp)}</p>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <label>Surf height</label>
                  <div>
                    {item.surf.min}-{item.surf.max}ft
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import SurfInfoTile from "./SurfInfoTile";
import { useEffect, useState } from "react";
import { getTimestampHour, everyNth, getTimestampClockTime } from "../helpers";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
  const dayOfWeek = new Date().getDay();

  const forecastDays = weekDays
    .slice(dayOfWeek, weekDays.length)
    .concat(weekDays.slice(0, dayOfWeek));

  const forecastSurfArray = forecastData.data.surf;

  const forecastSurfThirdHour = forecastSurfArray.filter((_, i) => {
    return i % 3 == 0;
  });

  const forecastSurfSixthHour = forecastSurfArray.filter((_, i) => {
    return i % 6 == 0;
  });

  const forecastSurfDaily = forecastSurfArray.filter((_, i)=> {
    return i % 24 == 0
  })

  

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
          {forecastSurfSixthHour.slice(1, 16).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div>
                    <label>{item.timestamp}</label>
                    
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

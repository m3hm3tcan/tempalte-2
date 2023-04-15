import React from "react";
import { videos } from "../../data";
import { useState } from "react";

const VideoSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <div className="flex flex-row justify-center items-center w-full">
        {videos.map((item, index) => (
          <div className={`${activeSlide === index ? "" : "hidden"} flex flex-col  items-center`}>
           {index === activeSlide &&  <iframe
              width="420"
              height="315"
              src={item.videoUrl}
              title="a"
            ></iframe>}
            <p className="w-2/3">{item.videoText}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center w-full pt-4">
        {videos.map((item, index) => (
          <div
            className={`${
              activeSlide === index ? "bg-accent" : "bg-gray-600"
            } w-4 h-4 rounded-full cursor-pointer mx-1`}
            onClick={() => setActiveSlide(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default VideoSlider;

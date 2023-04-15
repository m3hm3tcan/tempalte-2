import React from "react";
import VideoSlider from "./VideoSlider";

const Videos = () => {
  return (
    <section id="videos" className="section bg-secondary">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-title before:content-videos relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-32 before:hidden before:lg:block">
          Watch my videos
        </h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <VideoSlider />
      </div>
    </section>
  );
};

export default Videos;

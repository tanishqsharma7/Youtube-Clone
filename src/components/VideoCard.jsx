import React from "react";
import { timeAgo } from "../Utils/UtilsFunctions";

const VideoCard = ({ videoInfo }) => {
  
  function convertToInternationalCurrencySystem(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
      : Math.abs(Number(labelValue));
  }

  

  return (
    <div className="w-72  m-8">
      <img
        className="rounded-xl shadow-2xl"
        src={videoInfo?.snippet?.thumbnails?.high?.url}
        alt=""
      />
      <div className="">
        <p className="text-lg font-bold tracking-tight m-2">

          {videoInfo?.snippet?.title?.length>=50?videoInfo?.snippet?.title?.substring(0,50)+"...":videoInfo?.snippet?.title}
        </p>

        <p className="font-normal text-base text-gray-700 dark:text-gray-400 m-2">
          {videoInfo?.snippet?.channelTitle}
        </p>
        <p className="ont-normal text-gray-700 text-base dark:text-gray-400 m-2">
          {convertToInternationalCurrencySystem(
            videoInfo?.statistics?.viewCount
          )}{" "}
          views  · {timeAgo(videoInfo?.snippet?.publishedAt)}
        </p>
      </div>
    </div>
  );
};


export default VideoCard;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_BY_ID_API } from "../Utils/constants";
import CommentsList from "./CommentsList";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState();

  async function getVideoById() {
    const data = await fetch(
      YOUTUBE_VIDEO_BY_ID_API +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    setVideoData(json);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    getVideoById();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <iframe
        className="rounded-lg m-8 shadow-2xl"
        width="885"
        height="498"
        src={
          "https://www.youtube.com/embed/" +
          videoData?.items[0]?.id +
          "?autoplay=1"
        }
        title="React.js Project to Embed Youtube Video in IFrame inside Browser Without any Library in Javascript"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <CommentsList/>
    </div>
  );
};

export default Watch;

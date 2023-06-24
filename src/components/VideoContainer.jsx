import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { openMenu } from "../Utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch=useDispatch();

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }
  useEffect(() => {
    getVideos();
    dispatch(openMenu());
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {videos?.map((video) => (
        <Link key={video.id}  to={"/watch?v="+video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

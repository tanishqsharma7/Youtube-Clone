import React, { useEffect, useState } from "react";
import { timeAgo } from "../Utils/UtilsFunctions";
import chevron_down from "../svg/chevron_down.svg";
import { YOUTUBE_ALL_REPLIES_BY_ID } from "../Utils/constants";

const Comment = ({ commentInfo }) => {
  // console.log(commentInfo);
  const [allreplies, setAllReplies] = useState([]);
  const [pageToken, setPageToken] = useState("");

  async function getAllReplies() {
    console.log(commentInfo.id);
    const data = await fetch(
      YOUTUBE_ALL_REPLIES_BY_ID +
        commentInfo.id +
        "&pageToken=" +
        pageToken +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );

    const json = await data.json();

    console.log(json);
    if (allreplies.length > 0) {
      setAllReplies([...allreplies, ...json?.items]);
    } else setAllReplies(json?.items);
    if (Object.hasOwn(json, "nextPageToken")) {
      console.log("FUCK OFF")
      setPageToken(json.nextPageToken);
    } 
  };

  useEffect(() => {
    getAllReplies();
  }, [pageToken]);
  return (
    <div className="flex flex-row my-4">
      
      <img
        className="h-6 w-6 rounded-full m-2"
        alt="name"
        src={
          commentInfo?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
        }
      />

      <div>
        <div className="flex flex-row">
          <p className="text-sm mt-2 font-bold">
            @{commentInfo?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>

          <p className="text-sm mt-2 ml-2">
            {timeAgo(commentInfo?.snippet?.topLevelComment?.snippet?.updatedAt)}
          </p>
        </div>
        <p className="text-base ml-1 font-medium">
          {commentInfo?.snippet?.topLevelComment?.snippet?.textOriginal}
        </p>
        <button className="flex flex-row hover:bg-blue-300 rounded-3xl p-2">
          <img className="h-4 w-4 mt-1 " src={chevron_down} />
          Replies
        </button>
      </div>
    </div>
  );
};

export default Comment;

import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_LIST_API } from "../Utils/constants";
import InfiniteScroll from "react-infinite-scroll-component";

const CommentsList = () => {
  const [searchParams] = useSearchParams();
  const [allComments,setAllComments]=useState([]);
  const [pageToken,setPageToken]=useState("");
  const [response,setResponse]=useState({});

  const getAllComments = async () => {
    const data = await fetch(
      YOUTUBE_COMMENTS_LIST_API +
        searchParams.get("v") +
        "&pageToken="+pageToken+
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();

    setAllComments([...allComments,...json?.items]);
    setResponse(json);
  };

  const getNextPageToken=()=>{
    console.log(response?.nextPageToken)
    setPageToken(response?.nextPageToken);
  }
  useEffect(() => {
    getAllComments();
  }, [pageToken]);


  return (
    <div className="py-8 mx-8 w-[885px] h-[498px] ">
      
  <InfiniteScroll
    dataLength={allComments.length}
    next={()=>getNextPageToken()}
    hasMore={true}
    loader={<h1>Loading...</h1>}
    
  >
   {allComments.length==0? <h1>No Comments</h1>: allComments.map((comments)=>(
        <Comment key={comments?.id} commentInfo={comments}/>
      ))}
  </InfiniteScroll>
    </div>

    
  );
};

export default CommentsList;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=28&chart=mostPopular&regionCode=US&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_BY_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_LIST_API="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId="


export const YOUTUBE_ALL_REPLIES_BY_ID="https://youtube.googleapis.com/youtube/v3/comments?part=snippet&maxResults=100&parentId="

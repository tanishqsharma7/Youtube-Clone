export const timeAgo = (rawDate) => {
    let date = "";
    for (let i = 0; i < rawDate?.length; i++) {
      if (rawDate[i] === "T") date += " ";
      else if (rawDate[i] === "Z") {
      } else date += rawDate[i];
    }
    date = Date.parse(date);

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      if (interval === 1) return interval + " year ago";
      return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      if (interval === 1) return interval + " month ago";
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      if (interval === 1) return interval + " day ago";
      return interval + " days ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      if (interval === 1) return interval + " hour ago";
      return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      if (interval === 1) return interval + " minute ago";
      return interval + " minutes ago";
    }

    if (seconds < 10) return "just now";

    return Math.floor(seconds) + " seconds ago";
  };
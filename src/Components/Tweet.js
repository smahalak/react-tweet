import React from "react";
import "../styles/Tweet.scss";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <div className="tweet">
      <h1>{name}</h1>
      <h2>{tweet.message}</h2>{" "}
      {/* Has to be .message b/c the tweet object is passed from tweetlist */}
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;

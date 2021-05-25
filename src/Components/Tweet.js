import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };

  return (
    <div className="tweet">
      <h1>{name}</h1>
      <h2>{tweet}</h2>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;

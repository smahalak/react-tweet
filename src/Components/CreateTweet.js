import React, { useState } from "react";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    //console.log(e.target.value);
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;

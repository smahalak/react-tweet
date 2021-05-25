import Tweet from "./Components/Tweet";
import CreateTweet from "./Components/CreateTweet";
import TweetList from "./Components/TweetList";
import { useState, useEffect } from "react";

function App() {
  // runs the first time App is rendered on the screen
  useEffect(() => {
    console.log("we run a function yaaay ");
  }, []); // in this second argument we could put say the tweets state here so this is ran each time the tweets array changes or say textInput so each time the user types in the text field, this useEffect is ran

  const [name, setName] = useState("Steven");

  const [textInput, setTextInput] = useState(""); // lifted the state from CreateTweet, text entered in field is equal to textInput
  const [tweets, setTweets] = useState([]); // lifted the state from CreateTweet, gets added to array after form is submitted

  const message = "hi there";
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;

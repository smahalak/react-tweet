import Tweet from "./Components/Tweet";
import CreateTweet from "./Components/CreateTweet";
import TweetList from "./Components/TweetList";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Steven");

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

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

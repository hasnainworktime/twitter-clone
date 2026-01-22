let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

function addTweet() {
  const input = document.getElementById("tweetInput");
  const text = input.value.trim();

  if (text === "") return;

  const tweet = {
    user: "Muhammad Hasnain",
    content: text,
    time: new Date().toLocaleString()
  };

  tweets.unshift(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));

  input.value = "";
  showTweets();
}

function showTweets() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  tweets.forEach(t => {
    const div = document.createElement("div");
    div.className = "tweet";
    div.innerHTML = `
      <div class="username">${t.user}</div>
      <div>${t.content}</div>
      <div class="time">${t.time}</div>
    `;
    feed.appendChild(div);
  });
}

showTweets();

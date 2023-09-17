$(document).ready(function() {

  const tweets = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    // Add more tweet objects as needed
  ];

  const createTweetElement = function(tweet) {
    const $tweet = `
      <article class="tweet">
        <div class="center-align">
          <img src="${tweet.user.avatars}" class="user-avatar">
          <label for="name" class="user-name user-info">${tweet.user.name}</label>
          <label for="username" style="color:rgb(173, 181, 237)">${tweet.user.handle}</label>
        </div>
        <p class="tweet-content">${tweet.content.text}</p>
        <footer>
        <label>${timeago.format(tweet.created_at)}</label>
          <div class="tweet-actions footer_icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `;
    return $tweet;
  };
    

  const renderTweets = function(tweets) {

  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
    console.log('Tweet added:', $tweet);
  }
};

// Sample tweet data for testing

// Call renderTweets with the array of tweet data
renderTweets(tweets);


});
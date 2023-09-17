/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function(tweetData) {
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

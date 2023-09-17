$(document).ready(function() {

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
    }
  };


  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    const formData = $(this).serialize();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData,
      success: function(response) {
        loadTweets();
        console.log("success;",response);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: function(tweets) {
        renderTweets(tweets);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  };

  loadTweets();
});

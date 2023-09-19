$(document).ready(function() {

  // Function to create a new tweet element
  const createTweetElement = function(tweet) {
    const $tweet = `
      <article class="tweet">
        <div class="tweet-header">
          <img src="${tweet.user.avatars}" class="user-avatar">
          <label for="name" class="user-name">${tweet.user.name}</label>
          <label for="username" class="tweet-label">${tweet.user.handle}</label>
        </div>
        <p>${$('<div>').text(tweet.content.text).html()}</p>
        <footer class="footer-line">
          <label>${timeago.format(tweet.created_at)}</label>
          <div class="tweet-actions">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `;
    return $tweet;
  };

  // Function to render tweets on the page
  const renderTweets = function(tweets) {
    const $container = $('#tweets-container');
    $container.empty(); 

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $container.prepend($tweet);
    }

    document.getElementById('tweet-text').value = "";
    $('.counter').text(140);
  };
  
  // Function to display validation error messages
  const displayValidationError = function(message) {
    const $errorElement = $('.error-message');
    $errorElement.text(message).slideDown();
  };

  // Function to validate tweet text before submission
  function validateTweetText(tweetText) {
    if (!tweetText) {
      displayValidationError('⚠️ Tweet content cannot be empty.⚠️');
      return false;
    }

    if (tweetText.length > 140) {
      displayValidationError('⚠️ Tweet content is too long. Maximum 140 characters allowed. ⚠️');
      return false; 
    }

    // If validation passes, hide the error element
    $('.error-message').slideUp();
    return true; 
  };

  // Handle tweet submission when the form is submitted
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const tweetText = $('#tweet-text').val();
  
    if (!validateTweetText(tweetText)) {
      return;
    }
  
    const formData = $(this).serialize();
  
    // Send a POST request to add a new tweet
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData,
      success: function(response) {
        loadTweets();
        const newTweet = createTweetElement(response);
        $('#tweets-container').prepend(newTweet);
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });
  
  // Function to load tweets from the server and render them
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

  // Initial load of tweets when the page is loaded
  loadTweets();
});

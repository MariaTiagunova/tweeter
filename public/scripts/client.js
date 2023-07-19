/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //escape function to prevent XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const renderTweets = function(tweets) {
    $('#tweet-container').empty(); // Clear existing tweets
    for (let tweet of tweets) {
    // call createTweetElement for each tweet
      const $tweetElement = createTweetElement(tweet);
      // take return value and appends it to the tweets container
      $('#tweet-container').prepend($tweetElement);
    }
  };


  const createTweetElement = function(tweet) {
    let $tweet = $(
      `<article class="tweet">
    <header>
     <div>
      <img src=${tweet.user.avatars} alt = "profile picture" />
      <h3>${tweet.user.name}</h3>
    </div>
      <h4>${tweet.user.handle}</h4>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer><div class="date-post">${timeago.format(tweet.created_at)}</div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-repeat"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>`
    );
    return $tweet;
  };

  const postTweet = () => {
    event.preventDefault();
    // retreive the value of tweet-form, remove leading or trailing whitespace
    const tweetContent = $(".tweet-form textarea").val().trim();
    if (tweetContent === "") {
      $("#error-message").text("❗ Please enter a tweet").show();
      return;
    }

    if (tweetContent.length > 140) {
      $("#error-message").text("❗ Tweet exceeds the maximum character limit").show();
      return;
    }
    //If no errors, hide the error element
    $("#error-message").hide();

    const data = $(".tweet-form").serialize();
    $.post("/tweets", data).then((result) => {
      loadTweets();
    });
 
  };

  $(".tweet-form").on("submit", (event) => {
  //prevent the default form submission behaviour (refresh)
    event.preventDefault();
    postTweet();
  });

  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      type: "GET",
      dataType: "json", // Make sure it is set to "json"
      success: (result) => {
        renderTweets(result); // Pass the result to the renderTweets function
      },
      error: (error) => {
        console.error("An error occurred: ", error);
      },
    });
  };
  $("#error-message").hide();
  loadTweets(); // Call the loadTweets function to fetch and render the tweets
});

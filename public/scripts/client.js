/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet of tweets) {
    // calls createTweetElement for each tweet
      const $tweetElement = createTweetElement(tweet);
       // takes return value and appends it to the tweets container
      $('#tweet-container').append($tweetElement);
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
    <p>${tweet.content.text}Eu augue ut lectus arcu bibendum at varius</p>
    <footer><div class="date-post">${tweet.created_at}</div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-repeat"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>`
    )
    return $tweet
}

renderTweets(data);

});

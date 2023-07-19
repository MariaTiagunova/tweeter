# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The page contains a header, user image, form for adding a new tweet, and tweets feed section.
<img src="https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-mobile-main.png" width=600 alt="Mobile page">

Primarily designed for mobile, it also has a desktop version.

Both versions of the page notify users if they're trying to send an empty tweet 
<img src="https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-desktop-err-empty.png" width=1200 alt="Error: empty tweet">

or the tweet's length exceeds 140 characters. Also, there is a counter of characters, which turns red when the number exceeds 140.
<img src="https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-desktop-err-exceed.png" width=1200 alt="Error: the tweet is too long">

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

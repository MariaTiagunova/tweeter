# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The page consists of header, user image, form for adding a new tweet, and tweets feed section.
!["Mobile page"](https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-mobile-main.png?raw=true)

Primarily designed for mobile, it also has a desktop version.

Both versions of the page notify user if they're trying to send an empty tweet 
["Error: empty tweet"](https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-desktop-err-empty.png?raw=true)

or the tweet's length exceeds 140 characters:
["Error: tweet is too long"](https://github.com/MariaTiagunova/tweeter/blob/master/docs/tweeter-desktop-err-exceed.png?raw=true)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

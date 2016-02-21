# twitter-sentiment

## Description

Tracks twitter queries and displays live graphs from sentiment analysis

## Setup

Create config.js with

```javascript
module.exports = {
  consumer_key: 'XXX',
  consumer_secret: 'XXX',
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
};
```

and fill in your keys and secrets

Run `npm install`


## Running it

```
./bin/sentiment-stream --track={query}
```

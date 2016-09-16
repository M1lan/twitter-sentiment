# sentiment analysis prototype cli tool

## what it does?
Tracks twitter queries and displays live CLI graphs

## installation instructions

- clone repo
- create config.js with

```javascript
module.exports = {
  consumer_key: 'XXX',
  consumer_secret: 'XXX',
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
};
```


...and fill in your keys and secrets.  You will need valid Twitter
developer credentials in the form of a set of consumer and access
tokens/keys. You can get these here: https://apps.twitter.com/. Please
don't forgot to adjust your permissions - most POST request require
write permissions.


- Run `npm install`


## running

```
./bin/sentiment-stream --track="query"
```

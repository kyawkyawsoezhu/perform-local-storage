# perform-local-storage
perform action like save or load to browser's localStorage with Promise type

## Installation

    $ npm install perform-local-storage
  
#### Examples

##### Your action creator will look this this
```javascript
import performLocalStorage from 'perform-local-storage';

// action for load data from localStorage
export function fetchRecentArticles(limit = 3) {
  const payload = performLocalStorage('load', { limit, key: 'recentArticle' });
  return {
    type: FETCH_RECENT_ARTICLES,
    payload,
  };
}

// action for save data from localStorage
export function postRecentArticle(data) {
  const payload = performLocalStorage('save', { data, key: 'recentArticle' });
  return {
    type: POST_RECENT_ARTICLES,
    payload,
  };
}
```

You have to use [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) for handling async code in your component.

------
**Note** this is just a beta version, this package was create due to my current project needed.
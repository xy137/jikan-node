# Jikan-node

Jikan-node is a node (and javascript) wrapper for the unofficial MAL api, Jikan

Link to API: https://jikan.docs.apiary.io/

Link to genre IDs : https://jikan.docs.apiary.io/#reference/0/search

## Installation

`npm install jikan-node --save` or `yarn add jikan-node`

## Features

- User lookup
- Anime lookup
- Manga lookup
- Person lookup
- Character lookup
- Search
- Season lookup
- Schedule lookup
- Top
- Genre lookup
- Producer lookup
- Magazine lookup
- Club lookup

## Usage

Javascript:

```javascript
const mal = require("jikan-node");
```

Typescript:

```typescript
import * as mal from "jikan-node";
```

### Example

The code below will find every Nisemonogatari (https://myanimelist.net/anime/11597/Nisemonogatari) episode on the first page, since there is only one page for episodes it will return that single page. The IDs for shows are in MAL's URL and page number is optional.

```javascript
findAnime({
  id: 11597,
  request: "episodes",
  page: 1, // Optional
})
  .then(info => console.log(info))
  .catch(err => console.error(err));
```

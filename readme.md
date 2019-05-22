# Jikan-node

Jikan-node is a node (and javascript) wrapper for the unofficial MAL api, Jikan

Link to API: https://jikan.docs.apiary.io/

Link to genre IDs : https://jikan.docs.apiary.io/#reference/0/search

## Installation

`npm install jikan-node --save`

## Features

* User lookup
* Anime lookup
* Manga lookup
* Person lookup
* Character lookup
* Search
* Season lookup
* Schedule lookup
* Top
* Genre lookup
* Producer lookup
* Magazine lookup
* Club lookup

## Usage

```javascript
const Jikan = require('jikan-node');
const mal = new Jikan();
```

### Example

The code below will find every Nisemonogatari (https://myanimelist.net/anime/11597/Nisemonogatari) episode on the first page, since there is only one page for episodes it will return that single page. The ids for shows are in the url and page number is optional.
```javascript
mal.findAnime('11597', 'episodes', 1)
    .then(info => console.log(info))
    .catch(err => console.log(err));
```
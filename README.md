# News Flash

### by Janet Leon

## About

This is the server repsoitory. Front end deployed link found below.

News Flash is an app designed to get your news and save articles all in one place. Multiple sources are searched using the api from
https://newsapi.org/.

MVC Features:

- Get Top Headlines By Category
- Search Topics
- Create New Folders to save Articles
- Delete Folders
- Add Articles to Folders
- Delete Articles from Folders
- Add Articles to Multiple Folders

## Deployed version

https://newsflashapp.herokuapp.com/

## How to Use

- This app is best used on a desktop browser. If issues arise while logging in on a mobile device, please try again when back at desktop computer.
- Works best on Goodle Chrome
- Create a new username and password or use the demo account details provided below.
- To read about the app, click the about link on the top right corner found on the main page with directory 'https://newsflashapp.herokuapp.com/news'
- Click on each navigation item at the top to get headlines for each topic
- Search a topic using the search form below the navigation
- Hover over an item and scroll for any overflow. Hovering an item also reaveal the 'Add to Folder Button' Click to add to a folder.
- If no folder exists open the side menu by clicking on the burger icon on the side navigation.
- Create a folder by typing into the form and press enter.
- To see each folder's content, click on the title of the button.

### Demo User

- username: demouser
- password: demouser123

## Screenshots

![Desktop](https://github.com/jileon/janet-reactCapstone-client/blob/master/screenshots/Desktop.png)
![Desktop](https://github.com/jileon/janet-reactCapstone-client/blob/master/screenshots/desktop-folder-contents.png)
![iPad Pro](https://github.com/jileon/janet-reactCapstone-client/blob/master/screenshots/ipadPro.png)
![Mobile](https://github.com/jileon/janet-reactCapstone-client/blob/master/screenshots/mobile.png)
![Mobile](https://github.com/jileon/janet-reactCapstone-client/blob/master/screenshots/mobile-folder-menu.png)

## Tech Stack

### The Front

- Client info can be found here https://github.com/jileon/react-newsFlash-client
- React
- Redux
- HTML
- CSS
- Enzyme and Jest for testing

### The Back

- Node.js
- Express.js
- Mongoose
- MongoDB
- mLab for
- Passport and Bcrypt for salting and encryption
- JWTs on login
- mLab for data storage

## Schema

### User

```js
{
    username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''}
  }
}


```

### Folders

```js
{
foldername: {type: String, required: true},
userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
articles: [{title: String, source: String, url: String, image:String, description:String}],
}


```

## API Overview

```text
/api
.
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
├── /users
│   └── POST
│       └── /
├── /newsflash
│   └── GET
│       ├── /search
│       ├── /headlines
│       ├── /health
│       ├── /science
│       └── /sports
│       ├── /technology
│       ├── /entertainment
│       └── /business
├── /newsflash/folders
│   └── GET/
│   └── GET /:id
│   └── PUT/:id

│   └── POST/
│   └── DELTE/:id
├── /newsflash/folders/removearticle
│   ├── PUT/:id

```

### POST `/api/auth/login`

```js
// req.body
{
  username: String,
  password: String
}

// res.body
{
  authToken: String
}
```

### POST `/api/auth/refresh`

```js
// req.header
Authorization: Bearer ${token}

// res.body
{
  authToken: ${token}
}
```

### POST `/api/users/`

```js
// req.body
{
  email: String,
  username: String,
  password: String,
  firstname: String,
  lastname: String
}

// res.body
{
  name: String,
  username: String
  firstName: String,
  lastName: String,
  id: String,
}
```

### GET `newsflash/folder`

```js
// req.user
{
  userId: String,
}

// res.body

{
    id : String
    foldername :String
    userId : String
    articles : Array
    createdAt : String
    updatedAt : String

}
```

### GET `newsflash/folder/:id`

```js
// req.params
id: String;

// res.body

{
  id: String;
  foldername: String;
  userId: String;
  articles: Array;
  createdAt: String;
  updatedAt: String;
}
```

### POST `newsflash/folder/`

```js
// req.body
{
  foldername: String,

}

// req.user
{
  id: String
}
```

### PUT `newsflash/folder/:id`

```js
// req.params
id: String,
  // req.body
  {
    article: {
      title,
      image,
      description,
      url,
      source
    }
  };
```

### PUT `newsflash/folder/removearticle/:id`

```js
// req.params
id: String,
  // req.user
  {
    id: String
  };
// req.body
{
  articleID: String;
}
```

### GET

#### `/api/newsflash/headlines`

#### `/api/newsflash/health`

#### `/api/newsflash/science`

#### `/api/newsflash/sports`

#### `/api/newsflash/technology'`

#### `/api/newsflash/entertainment`

#### `/api/newsflash/business`

```js
These endpoints makes a call to the api provided by https://newsapi.org/
Please see their documentation for examples of the response objects.
```

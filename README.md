# Node-HM-Templates

## Description

This project is an Express server that demonstrates the use of two different template engines: **Pug** for user pages and **EJS** for article pages. Each type of page has its own CSS styles for better appearance.

---

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/roflmorries/Node-HM-Templates
   cd Node-HM-Templates
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node src/app.js
   ```
   or with nodemon:
   ```
   npx nodemon src/app.js
   ```

---

## Project Structure

```
src/
  app.js
  data/
    users.js
    articles.js
  public/
    css/
      users.css
      articles.css
  routes/
    userRouter.js
    articleRouter.js
  views/
    pug/
      index.pug
      users.pug
      user.pug
    ejs/
      articles.ejs
      article.ejs
```

---

## Routes

### Users (Pug)

- **GET `/users`**  
  Displays a list of all users (template: `views/pug/users.pug`).

- **GET `/users/:id`**  
  Displays detailed information about a user by their ID (template: `views/pug/user.pug`).

### Articles (EJS)

- **GET `/articles`**  
  Displays a list of all articles (template: `views/ejs/articles.ejs`).

- **GET `/articles/:id`**  
  Displays detailed information about an article by its ID (template: `views/ejs/article.ejs`).

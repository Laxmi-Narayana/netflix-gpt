# NETFLIX-GPT

create react app
configure tailwindcss
configure routing
Header
Login form
Signup form
UseRef
Form Validation

FireBase setup
npm install -g firebase tools
firebase login
firebase init
npm run build -> deploying app to production
firebase deploy

npm start

create signup user account in firebase
https://firebase.google.com/docs/auth?hl=en&authuser=0
authentication, users, documentation

implement signin user api
created redux store with configureStore and createSlice

on successfull Signin, push user information to redux store i.e., dispatch an action
using onAuthStateChanged, when ever user signs in or out, i.e., authentication changes

profile update (display name and photo url)
post update dispatch action to reflect changes in redux store

### Movies

## handle Signout

## start

npx create-react-app
npm start

## tailwindcss configuration

taiwindcss website
get started
framework guides
select create-react-app

npm install -D tailwindcss
npx tailwindcss init

# Features

- Login/Sign up
  - Sign In/ Sign up
  - redirect to Browse Page
- browse (after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Title & Description
  - Movie suggestions
    - MovieLists
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Routing

npm install -D react-router-dom
create appRouter by createBrowserRouter(path & element list)
use RouterProvider and pass router={appRouter} configuration

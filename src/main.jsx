import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Roots from './Components/Roots/Roots.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {index: true, Component: Home},
      {path: "mobile", Component: Mobile},
      {path: "laptop", Component: Laptop},
      {
        path: "users", 
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: "users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts/`),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: "/home",
    element: <div>it is all about home page</div>
  },
  {
    path: "/app",
    Component: App 
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

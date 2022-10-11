import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Topics></Topics> },
        { path: 'statistics', element: <Statistics></Statistics> },
        { path: 'blogs', element: <Blogs></Blogs> },
        // {
        //   path: 'friends',
        //   loader: async () =>{
        //     return fetch('https://jsonplaceholder.typicode.com/users');
        //   },
        //   element: <Friends></Friends>
        // },
        // {
        //   path:'/friend/:friendId',
        //   loader: async ({params}) =>{
        //     return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        //   },
        //   element: <FriendDetails></FriendDetails>
        // },
        // {
        //   path: 'posts',
        //   loader: async() =>{
        //     return fetch('https://jsonplaceholder.typicode.com/posts')
        //   },
        //   element: <Posts></Posts>
        // },
        // {
        //   path: '/post/:postId',
        //   loader: async({params}) =>{
        //     return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        //   },
        //   element: <PostDetails></PostDetails>
        // }
      ]
    },
    { path: '*', element: <div>This route not found: 404</div> }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

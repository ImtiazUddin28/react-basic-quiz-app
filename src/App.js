import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Statistics from './components/Statistics/Statistics';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Topics></Topics> },
        // { path: 'topics', element: <Topics></Topics> },
        { path: 'statistics', element: <Statistics></Statistics> },
        { path: 'blogs', element: <Blogs></Blogs> },
        {
          path: 'topics',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path:'/topics/:id',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <TopicDetails></TopicDetails>
        },
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
    { path: '*', element: <div>
      <h1>This route not found: 404</h1>
      <h2>Please use a right path name</h2>
    </div> }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

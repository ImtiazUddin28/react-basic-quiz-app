import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
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
        {
          path: '/',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
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
        
      ]
    },
    { path: '*', element: <Error></Error>}
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

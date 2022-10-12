import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="blog_container">
            <div className="question">
                <h1> <span>Question: </span> What is the purpose of React Router?</h1>
                <h3><span>Answer: </span><br></br>
                Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.<br></br>

                <span>Need of React Router </span><br></br>
                React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                 </h3>
            </div>
            <div className="question">
                <h1> <span>Question: </span> How does Context API work?</h1>
                <h3><span>Answer: </span><br></br>
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                 </h3>
            </div>
            <div className="question">
                <h1> <span>Question: </span>Write the uses of react useRef hooks ?</h1>
                <h3><span>Answer: </span>
                    <ul>
                        <li> The useRef Hook allows you to persist values between renders.</li>
                        <li>It can be used to store a mutable value that does not cause a re-render when updated.</li>
                        <li> It can be used to access a DOM element directly</li>
                    </ul>

                </h3>
            </div>
        </div>
    );
};

export default Blogs;
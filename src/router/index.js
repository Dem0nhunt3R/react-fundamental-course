import About from "../pages/About/About";
import Posts from "../pages/Posts/Posts";
import Post from "../pages/Post/Post";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

export const privateRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <Post/>, exact: true}
]

export const publicRoutes = [
    {path: '/', component: <Home/>, exact: true},
    {path: '/login', component: <Login/>, exact: true}
]
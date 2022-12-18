import Home from "../pages/Home";
import About from "../pages/About";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
]

// Authorized
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
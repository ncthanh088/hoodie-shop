import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/detail", component: Detail },
    { path: "/about", component: About },
]

// Authorized
const privateRoutes = [

]

export { publicRoutes, privateRoutes }
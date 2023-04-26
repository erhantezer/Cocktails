import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import SingleCocktail from "../pages/SingleCocktail";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        element: (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"contact",
                element: <Contact/>
            },
            {
                path:"cocktail/:id",
                element: <SingleCocktail/>
            },
        
        ]
    }
])
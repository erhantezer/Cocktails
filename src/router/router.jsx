import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import SingleCocktail from "../pages/SingleCocktail";


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
                path:"cocktail/:id",
                element: <SingleCocktail/>
            },
        
        ]
    }
])
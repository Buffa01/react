import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";


function AppRouter() {
    const datos = JSON.parse(localStorage.getItem('datos'))
    console.log(datos)

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/login" element={<Login />}></Route>
                {datos != null ? <Route path="/home" element={<Home />}></Route> : <Route path="/home" element={<Login />}></Route>}

                <Route path="*" element={'404'} ></Route>


            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;
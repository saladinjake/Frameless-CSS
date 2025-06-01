import { Routes, Route  } from "react-router-dom";
import { lazy } from "react"

const HomePageModule = lazy(() => import("../modules/Home"))


export const RouteOutlets = () => {

    return (
        <>
         <Routes>
          <Route  path="/" element={<HomePageModule/>} />
        </Routes>
        </>
    )
}
import { Route, Routes } from "react-router-dom"
import { Home, CreatePost, PageNotFound } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<ProtectedRoutes> <CreatePost /></ProtectedRoutes>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

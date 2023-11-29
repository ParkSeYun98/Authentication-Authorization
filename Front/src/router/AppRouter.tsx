import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../page/LoginPage"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <LoginPage/> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
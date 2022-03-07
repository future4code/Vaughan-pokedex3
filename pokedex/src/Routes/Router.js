import React from 'react'
import Home from '../Pages/Home'
import PaginaDetalhes from '../Pages/PaginaDetalhes'
import PaginaPokedex from '../Pages/PaginaPokedex'
import PaginaErro from '../Pages/PaginaErro'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Home />} />

                <Route path={"/detalhes"} element={<PaginaDetalhes />} />

                <Route path={"/pokedex"} element={<PaginaPokedex />} />

                <Route path={"*"} element={<PaginaErro />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
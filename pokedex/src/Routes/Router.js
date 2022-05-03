import React from 'react'
import Home from '../Pages/Home/Home'
import PaginaDetalhes from '../Pages/PaginaDetalhes/PaginaDetalhes'
import PaginaPokedex from '../Pages/PaginaPokedex/PaginaPokedex'
import PaginaErro from '../Pages/PaginaErro/PaginaErro'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Home />} />

                <Route path={"/detalhes/:id"} element={<PaginaDetalhes />} />

                <Route path={"/pokedex"} element={<PaginaPokedex />} />

                <Route path={"*"} element={<PaginaErro />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
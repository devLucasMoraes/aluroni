import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/cardapio' element={<Cardapio />}/>
            </Routes>
        </BrowserRouter>
    );
}
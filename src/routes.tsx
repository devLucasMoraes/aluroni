import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Inicio = lazy(() => import('pages/Inicio'));
const Cardapio = lazy(() => import('pages/Cardapio'));
const Sobre = lazy(() => import('pages/Sobre'));
const NotFound = lazy(() => import('pages/NotFound'));
const Pratos = lazy(() => import('pages/Prato'));

export default function AppRouter() {
    return (
        <main className='container'>
            <BrowserRouter>
                <Menu />
                <Suspense fallback={<p>Carregando...</p>}>
                    <Routes>
                        <Route path='/' element={<PaginaPadrao />}>
                            <Route index element={<Inicio />} />
                            <Route path='cardapio' element={<Cardapio />} />
                            <Route path='sobre' element={<Sobre />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                        <Route path='prato/:id/*' element={<Pratos />} />
                    </Routes>
                </Suspense>
                <Footer />
            </BrowserRouter>
        </main>
    );
}
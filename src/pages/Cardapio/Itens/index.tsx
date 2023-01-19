import { useEffect, useState } from 'react';
import Item from './Item'
import cardapio from './itens.json'
import styles from './Itens.module.scss'

interface ItensProps {
    busca: string,
    filtro: number | null;
    ordenador: string
}

export default function Itens( props : ItensProps) {
    const [lista, setLista] = useState(cardapio);
    const { busca, filtro } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(novaLista);
    }, [busca, filtro])

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}


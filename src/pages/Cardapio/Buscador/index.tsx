import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';

interface BuscadorProps {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({busca, setBusca} :BuscadorProps) {
    const cgSearchMemo = useMemo(() => <CgSearch size={20} color="#4c4d5e" />,[]);
    return (
        <div className={styles.buscador}>
            <input placeholder='Buscar' type="text" value={busca} onChange={evento => setBusca(evento.target.value)}/>
            {cgSearchMemo}
        </div>
    );
}

export default memo(Buscador);
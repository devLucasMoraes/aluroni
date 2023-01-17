import styles from './Buscador.module.scss'

interface BuscadorProps {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca} :BuscadorProps) {
    return (
        <div className={styles.buscador}>
            <input type="text" value={busca} onChange={evento => setBusca(evento.target.value)}/>
        </div>
    )
}
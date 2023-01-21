import { useParams } from 'react-router-dom';
import styles from './Prato.module.scss';

export default function Pratos() {
    console.log(useParams());
    return (
        <div>Prato</div>
    );
}
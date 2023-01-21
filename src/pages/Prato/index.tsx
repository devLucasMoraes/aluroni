import { useLocation, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';

export default function Pratos() {
    console.log(useParams());
    console.log(useLocation());
    return (
        <div>Prato</div>
    );
}
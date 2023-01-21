import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import classNames from 'classnames';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
export default function NotFound() {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <NotFoundImage />
        </div>
    );
}
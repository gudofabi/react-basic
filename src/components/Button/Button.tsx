interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'light';
    onClick: () => void;
}

import styles from './Button.module.css'

function Button({ children, onClick, color = 'primary' }: Props) {
    return (
        <button className={[styles.btn, styles[`btn-${color}`]].join(" ")} onClick={onClick}>
            { children }
        </button>
    );
}

export default Button;
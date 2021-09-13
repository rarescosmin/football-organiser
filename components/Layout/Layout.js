import styles from './Layout.module.css';
import Menu from '../Menu/Menu';

const Layout = ({ children }) => {
    return (
        <>
            <Menu />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
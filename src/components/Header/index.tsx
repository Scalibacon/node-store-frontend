import { FiSearch } from 'react-icons/fi';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerMain}>
        <h2>Logozin</h2>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Busque aqui"/>
          <button type="button"><FiSearch color="rgb(121,121,121)" size="1.5em"/></button>
        </div>

        <div className={styles.accountInfo}>
          <p>Faça login ou cadastre-se</p>
        </div>

        <div className={styles.iconsContainer}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <nav className={styles.headerLinks}>
        <ul>
          <li>TODAS AS CATEGORIAS</li>
          <li>NOVIDADES</li>
          <li>DESTAQUES</li>
          <li>PROMOÇÕES</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
import { FiSearch, FiUser, FiShoppingCart, FiPhoneCall, FiBookmark } from 'react-icons/fi';

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
          <FiUser size="50"/>
          <p>Faça <a href="">login</a> ou <a href="">cadastre-se</a></p>
        </div>

        <div className={styles.iconsContainer}>        
          <span>
            <FiPhoneCall size="20"/>
          </span>          
          <span>
            <FiBookmark size="20"/>
          </span>
          <span>
            <FiShoppingCart size="20"/>
          </span>
        </div>
      </section>

      <nav className={styles.headerLinks}>
        <ul>
          <li className={styles.dropdownLink}>
            TODAS AS CATEGORIAS
            <span></span>
            <div>

            </div>
          </li>
          <li>NOVIDADES</li>
          <li>DESTAQUES</li>
          <li>PROMOÇÕES</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
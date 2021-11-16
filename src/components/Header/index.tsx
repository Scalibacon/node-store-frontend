import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headerMain}>
        <h2>Logozin</h2>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Busque aqui"/>
        </div>

        <div className={styles.accountInfo}>
          Faça login ou cadastre-se
        </div>

        <div className={styles.iconsContainer}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className={styles.headerLinks}>
        
      </section>
    </header>
  )
}

export default Header;
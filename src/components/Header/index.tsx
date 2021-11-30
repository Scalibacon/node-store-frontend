import { useEffect, useRef, useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiPhoneCall, FiBookmark, FiMenu } from 'react-icons/fi';

import styles from './Header.module.scss';
import { category } from '../../pages/api/category';

const Header = () => {
  const [categories, setCategories] = useState<category[]>([]);
  const backgroundBlur = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLDivElement>(null);

  useEffect( () => {
    async function fetchCategories(){
      const result = await fetch('http://localhost:3000/api/category');
      const fetchedCategories = await result.json() as category[];
      setCategories(fetchedCategories);
    };

    fetchCategories();

  }, []);

  function toggleMenu(shouldHide: boolean = false){
    if(shouldHide === true){
      // do something
      return;
    }

    backgroundBlur.current?.classList.toggle(styles.active);
    navLinks.current?.classList.toggle(styles.active);
  }

  return (
    <>
    <div ref={backgroundBlur} className={styles.backgroundBlur}></div>
    <header className={styles.header}>     

      <section className={styles.headerMain}>
        <div className={styles.hamburger} onClick={event => toggleMenu()}>
          <FiMenu size="30"/> 
        </div>
              
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

      <nav ref={navLinks} className={styles.headerLinks}>
        <ul>
          <li className={styles.dropdownLinks}>
            TODAS AS CATEGORIAS
            <span></span>
            <div>
            { 
              categories.map( (category, index) => {
                return <a key={index}>{category.name}</a>
              })
            }
            </div>
          </li>
          <li>NOVIDADES</li>
          <li>DESTAQUES</li>
          <li>PROMOÇÕES</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;
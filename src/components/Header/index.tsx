import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiPhoneCall, FiBookmark, FiMenu } from 'react-icons/fi';

import styles from './Header.module.scss';
import { Cart } from '../Cart';
import { Category } from '../../pages/api/category';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const backgroundBlur = useRef<HTMLDivElement>(null);
  const navLinks = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  useEffect( () => {
    async function fetchCategories(){
      const result = await fetch('http://localhost:3000/api/category');
      const fetchedCategories = await result.json() as Category[];
      setCategories(fetchedCategories);
    };

    fetchCategories();

    hamburger.current?.addEventListener("click", toggleMenu);
    hamburger.current?.addEventListener("touchstart", toggleMenu);
    
    backgroundBlur.current?.addEventListener("click", toggleMenu);
    backgroundBlur.current?.addEventListener("touchstart", toggleMenu);

    return () => {
      hamburger.current?.removeEventListener("touchstart", toggleMenu);
      hamburger.current?.removeEventListener("click", toggleMenu);

      backgroundBlur.current?.removeEventListener("click", toggleMenu);
    backgroundBlur.current?.removeEventListener("touchstart", toggleMenu);
    }
  }, []);

  function toggleMenu(event: SyntheticEvent | any){
    if(event.type === 'touchstart') event.preventDefault();
    
    backgroundBlur.current?.classList.toggle(styles.active);
    navLinks.current?.classList.toggle(styles.active);
  }

  return (
    <>
    <div ref={backgroundBlur} className={styles.backgroundBlur}></div>
    <header className={styles.header}>     

      <section className={styles.headerMain}>
        <div ref={hamburger} className={styles.hamburger}>
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
            <Cart size="20"/>
          </span>
        </div>
      </section>

      <nav ref={navLinks} className={styles.headerLinks}>
        <ul>
          <li className={styles.onlyMobile}><span>CARRINHO</span> <Cart size="16"/></li>
          <li className={styles.onlyMobile}>MARCADORES <FiBookmark size="17"/></li>
          <li className={styles.dropdownLinks}>
            <p className={styles.head}>TODAS AS CATEGORIAS <span></span></p>
            
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
          <li className={styles.onlyMobile}>FALE CONOSCO <FiPhoneCall size="17"/></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;
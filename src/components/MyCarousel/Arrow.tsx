
import { ArrowProps } from 'react-multi-carousel/lib/types';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import styles from './Arrow.module.scss';

interface MyArrowProps extends ArrowProps {
  isTheLeftArrow: boolean
}

const Arrow = ({ onClick, isTheLeftArrow, ...rest }: MyArrowProps) => {
  return (
    <button 
      className={styles.arrow + (isTheLeftArrow ? ` ${styles.left}`  : "")} 
      onClick={ () => { if(onClick) onClick() } }
    >
      { isTheLeftArrow? <FiChevronLeft size={'2rem'} /> : <FiChevronRight size={'2rem'}/> }
    </button>
  )
}

export default Arrow;
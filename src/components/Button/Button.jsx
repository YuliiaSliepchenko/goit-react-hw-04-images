import s from './Button.module.css'
import PropTypes from 'prop-types';



export const Button = ({loadMore}) => {
  
    return ( 
       <div className={s.ButtonConteiner}>
            <button onClick={loadMore} className={s.Button}>
                Load more
            </button>
            </div>
     );
      }

export default Button;
    

Button.propTypes = {
  loadMore: PropTypes.func,
};
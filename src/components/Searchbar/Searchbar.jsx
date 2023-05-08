import s from './Searchbar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';



export default function Serchbar({setNewQuery}) {
    const [query, setQuery] = useState('');
    const inputChange = e => {
        setQuery(e.currentTarget.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            return;
        }
        setNewQuery(query.trim().toLowerCase());
        setQuery('');
    };
        return ( 
            <header className={s.Searchbar}>
              <form onSubmit={onFormSubmit} className={s.SearchForm}>
                <button type="submit" className={s.SearchFormButton}>
                   <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

    <input
      className={s.SearchFormInput}
      name="query"
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    value={query}
     onChange={inputChange}
    />
  </form>
</header> 
     );
};
    
Serchbar.protoTypes = {
    setQuery: PropTypes.func,
};
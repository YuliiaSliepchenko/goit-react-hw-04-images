import s from './Searchbar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';



export default class Serchbar extends Component {
   state = {
    query: '',
    };

    setQuery = e => {
        this.setState({
            query: e.currentTarget.value,
        });
    };
    onFormSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            return;
        }
        this.props.setQuery(this.state.query.trim().toLowerCase());
        this.setState({ query: '' });
    };

    render() {
        return ( 
            <header className={s.Searchbar}>
              <form onSubmit={this.onFormSubmit} className={s.SearchForm}>
                <button type="submit" className={s.SearchFormButton}>
                   <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

    <input
      className={s.SearchFormInput}
      name='query'
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    value={this.state.query}
     onChange={this.setQuery}
    />
  </form>
</header> 
     );
    }
}
    
Serchbar.protoTypes = {
    setQuery: PropTypes.func,
};
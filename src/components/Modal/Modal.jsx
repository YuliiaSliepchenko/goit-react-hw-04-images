import { Component } from 'react';
import s from './Modal.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');



 export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') 
            this.props.closeModal();
        
    };

    handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

    render() {
        return createPortal(
            <div onClick={this.handleBackdropClick} className={s.Overlay} >
                <div className={s.Modal}>
                    <img src={this.props.imageURL} alt={this.props.imageURL} />
                </div>
            </div>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func,
};
// export default Modal;

// Modal.propTypes = {
//   largeImageURL: PropTypes.string,
//   onClose: PropTypes.func,
// };

// instance.show()
// componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') this.props.onClose();
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) this.props.onClose();
//   };
import { useEffect } from 'react';
import s from './Modal.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');



export default function Modal({ closeModal, imageURL }) {
    const handleKeyDown = e => {
        if (e.code === 'Escape') closeModal();
        console.log(e.code);
    };

   const handleBackdropClick = e => {
    if (e.target === e.currentTarget) closeModal();
    };
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });


        return createPortal(
            <div onClick={handleBackdropClick} className={s.Overlay} >
                <div className={s.Modal}>
                    <img src={imageURL} alt='' />
                </div>
            </div>,
            modalRoot
        );
    }


Modal.propTypes = {
    imageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func,
};

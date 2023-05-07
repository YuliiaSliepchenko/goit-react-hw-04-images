import s from './ImageGallery.module.css'
// import { UnsplashApi } from './ImageGalleryAnspleshApi'; 
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';



export default function ImageGallery({ images, openModal }) {
    return (<ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeImageURL={largeImageURL}
                openModal={openModal}
            />
        ))}
    </ul>
    );
}
   
ImageGallery.propTypes = {
    images:PropTypes.array,
    openModal:PropTypes.func,
    id:PropTypes.number,
    webformatURL:PropTypes.string,
    tags:PropTypes.string,
    largeImageURL:PropTypes.string,
   }   
      
    
     

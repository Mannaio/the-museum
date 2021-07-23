import React from "react";
import PropTypes from 'prop-types'
import './card.css';

const CardMedia = ({ imageData, handleClickOpen }) => {

    return (
        <div className="card">
            <div className="card__body" onClick={handleClickOpen}>
                <div className="card__image" style={{ backgroundImage: "url(" + imageData.imageURL + ")" }}></div>
            </div>
            <div className="card__information">
                <div className="card__title">{imageData.title}</div>
                <div className="card__description">{imageData.dateCreated}</div>
            </div>
        </div>
    )

}

CardMedia.defaultProps = {
    handleClickOpen: () => { },

}

CardMedia.propTypes = {
    handleClickOpen: PropTypes.func,
}

export default CardMedia;
import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';
import images from '../../assest/images';

function Avartar({ image, name }) {
    return (
        <div className="avartar-container">
            <img className="img" src={images[image]} alt="" />
            <div className="name">{name}</div>
        </div>
    )
}

Avartar.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string
}

export default Avartar;

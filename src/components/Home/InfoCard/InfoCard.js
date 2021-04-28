import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css'

const InfoCard = (props) => {
    const {title, description, icon, background} = props.info;
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex align-items-center justify-content-center mb-3 info-${background} info-container`}>
                <div className="info-icon">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="info-details">
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
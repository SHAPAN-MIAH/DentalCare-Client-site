import React from 'react';
import './DepartmentDetail.css'

const DepertmentDetail = (props) => {
  const {img, title, dec} = props.depData
  return (
    <div className='col-md-4'>
      <div className='depDetail-content'>
        <img width='auto' src={img} alt=""/>
        <div className='depDetail-text'>
          <h5 className='mt-5'>{title}</h5>
          <p>{dec}</p>
          <button type="">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default DepertmentDetail;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import './Heroine.css';


const Heroine = (props) => {
    //console.log(props);
    const {img,name,age,country,salary,condition}= props.heroine;
    const element = <FontAwesomeIcon icon={faList}/>

    return (
        <div className="heroine">
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <h6>Country:{country}</h6>
            <p>Age:{age}</p>
            <p>Salary:{salary}</p>
            <p>Condition: {condition}</p>
            <button onClick={() => props.handleAddToList(props.heroine)}className="listButton">{element} Add to List</button>

        </div>
    );
};

export default Heroine;
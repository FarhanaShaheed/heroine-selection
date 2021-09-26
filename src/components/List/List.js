import React from 'react';
import './List.css';

const List = (props) => {
        ///console.log(props);

    const {list}=props;
    let total = 0;
    for(const heroine of list){
        total =total + heroine.salary;
    }

    return (
        <div className="list-text">
            <h2>Total List</h2>
            <h4>Selected Heroines: {props.list.length}</h4>
            <h4>Total Salary:{total}</h4>
            {
                props.names.map((name, i)=> 
                <h5 className="heroine-name" key={i}>{name}</h5>)
            
            }

        </div>
    );
};

export default List;
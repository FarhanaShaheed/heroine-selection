import React from 'react';
import './List.css';

const List = (props) => {
            console.log(props);

    const {list}=props;
    let total = 0;
    for(const heroine of list){
        total =total + heroine.salary;
    }

    return (
        <div>
            <h2>Total List</h2>
            <h4>Select Heroines: {props.list.length}</h4>
            <h4>Total:{total}</h4>
        </div>
    );
};

export default List;
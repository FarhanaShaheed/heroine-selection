import React, { useState } from 'react';
import './Platform.css';
import { useEffect } from 'react';
import Heroine from '../../Heroine/Heroine';
import List from '../../List/List';


const Platform = () => {
    const [heroines , setHeroines] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() =>{
        fetch('./heroine.JSON')
        .then(res => res.json())
        .then(data => setHeroines(data));
      },[])
    
      const handleAddToList = heroine =>{
             const newList =[...list, heroine];
             setList(newList);
      }

    return (
        < div className="total-platform">
            <div className="total-heroines">
                <h2>Products: {heroines.length}</h2>
                <div className="heroine-container">
                {
                    heroines.map(heroine =>< Heroine key={heroine.id} heroine={heroine}
                    handleAddToList ={handleAddToList}
                    >
                    </Heroine>)
                }
                </div>
            </div>
            <div className="total-calculation">
                    <List list={list}></List>
            </div>
            
        </div>
    );
};

export default Platform;
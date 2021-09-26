import React, { useState } from 'react';
import './Platform.css';
import { useEffect } from 'react';
import Heroine from '../../Heroine/Heroine';
import List from '../../List/List';


const Platform = () => {
    const [heroines , setHeroines] = useState([]);
    const [list, setList] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() =>{
        fetch('./heroine.JSON')
        .then(res => res.json())
        .then(data => setHeroines(data));
      },[])
    
      const handleAddToList = (heroine , name) =>{
             const newList =[...list, heroine];
             const newName =[...names, name];
             setList(newList);
             setNames(newName);
      }

    return (
        < div className="total-platform">
            <div className="total-heroines">
                <h2>Number of Heroines: {heroines.length}</h2>
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
                    <List list={list} names={names}></List>
            </div>
            
        </div>
    );
};

export default Platform;
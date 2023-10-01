/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const[selectActor, setSelectActor]= useState([]);
    const[remaining, setRemaining] = useState([])
    const [totalCost, setTotalCost] =useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setAllActors(data))
        
    },[])

    
   const handleSelectActor= actor=>{
    const isExist = selectActor.find(item =>item.id ==actor.id)

    let cost =actor.salary
    if(isExist){
        return alert('already booked')
    }
    else{
        selectActor.forEach(item =>{
            cost = cost +item.salary;
            
        })
        const  totalRemaining= 30000-cost;
        
        if(cost>= 30000){
            return alert('Amount is less')
        }
        else{
            setTotalCost(cost)
            setRemaining(totalRemaining);
            setSelectActor([...selectActor,actor])
        }
    }
    
   }

    // console.log(allActors);
    return (
        <div className='container'>
         <div className='home-container'>
         <div className="card-container">
          {
            allActors.map(actor =>(
                <div key={actor.id} className='card'>
                <img className='card-img' src={actor.image} alt="" />
                <h2>{actor.name}</h2>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </small></p>
                <div className='info'>
                    <p>salary:{actor.salary}</p>
                    <p>write</p>
                </div>
                <button className='btn' onClick={()=>handleSelectActor(actor)}>select</button>
          </div>
            ))
          }
         </div>
        <div className='cart'>
        <Cart
        selectActor={selectActor}
        remaining={remaining}
        totalCost={totalCost}
        ></Cart>
        </div>
       


         </div>
        </div>
    );
};

export default Home;
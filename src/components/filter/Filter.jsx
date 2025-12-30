import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import Pet from '../pet/Pet';
import Navbar from '../navbar/Navbar';

const Filter = () => {
    const {petId} = useParams();
    const findId =  data.find((pet)=> pet.id === Number(petId))
  return (
    <div>
        <Navbar />
        <Pet item={findId}/>
    </div>
  )
}

export default Filter
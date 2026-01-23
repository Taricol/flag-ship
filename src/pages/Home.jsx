import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhoneContainer from '../Components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData()
    const [phones,setPhones]=useState(data)
    const handleSearch=(e,text)=>{
        e.preventDefault()
        const searchedPhones=data.filter(phone=>
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    )
       
         setPhones(searchedPhones)
    }
    console.log(data);
    return (
        <div>
            <Hero handleSearch={handleSearch}/>
            <PhoneContainer phones={phones}/>
        </div>
    );
};

export default Home;
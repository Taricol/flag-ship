import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/ui/Button';
import { MdBookmarkAdd,MdShoppingCartCheckout} from "react-icons/md";
const PhoneDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const singlePhone=data.find(phone=>phone.id===parseInt(id))
    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info,
    }=singlePhone || {}
    
    return (
        <div className='w-full py-12'>
            <img src={image} alt="Banner Image" className='w-full mx-auto md:w-auto mb-8' />
            <div className="flex justify-between">
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div>
                    <Button label={<MdShoppingCartCheckout/>}></Button>
                    <Button label={<MdBookmarkAdd/>}></Button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";



const PhoneDetails = () => {
    const { id } = useParams();
    console.log(id);
    const phones = useLoaderData();
    console.log(phones)
    const [phone, setPhone] = useState({});

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id == id)
        setPhone(findPhone)
    }, [id, phones])

  
console.log(phone)


    return (
        
        <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
    );
};

export default PhoneDetails;
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
const PhoneDetailsCard = ({phone}) => {
const {id,name,image,price,description}=phone;
const handleAddToFavorite =()=>{
    const addFavoriteItems= [];
    const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
    if (!favoriteItems) {
        addFavoriteItems.push(phone)
        localStorage.setItem('favorite',JSON.stringify(addFavoriteItems))
        console.log(addFavoriteItems)
        Swal.fire({
            title: "Good job!",
            text: "You SuccessFully added your favorite item!",
            icon: "success"
          });
    }
    else{
        const isExists= favoriteItems.some(phone=>phone.id===id)
        if (!isExists) {
            addFavoriteItems.push(...favoriteItems,phone)
            localStorage.setItem('favorite',JSON.stringify(addFavoriteItems))
            Swal.fire({
                title: "Good job!",
                text: "You Successfully added your favorite item!",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                title: "Already Exist!",
                text: "Dublicate item not allow!",
                icon: "error"
              });
        }
        
       
    }
}

    
    
    return (
        <div className="flex justify-center my-20">

            <div>
                <Card className="w-full max-w-[48rem] md:flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none"
                    >
                        <img
                            src={image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            {name} 
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            ${price}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {description}
                        </Typography>
                        <div onClick={handleAddToFavorite}>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Add to favorite
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                        </div>
                    </CardBody>
                </Card>
            </div>

        </div>



    );
};

PhoneDetailsCard.propTypes = {
    phone: PropTypes.array
}

export default PhoneDetailsCard;
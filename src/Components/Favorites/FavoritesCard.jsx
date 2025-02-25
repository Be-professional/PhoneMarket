import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
// import Swal from "sweetalert2";
const FavoritesCard = ({phone}) => {
const {name,image,price,description}=phone;


    
    
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
                        <div>
                        <a href="#" className="inline-block">
                            <Button variant="text" className="flex items-center gap-2">
                                Order
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

FavoritesCard.propTypes = {
    phone: PropTypes.array
}

export default FavoritesCard;
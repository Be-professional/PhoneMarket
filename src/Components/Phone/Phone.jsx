
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function Phone({ phone }) {
    const {id, name, price, image, description } = phone
    return (
        <Card className="">
            <CardHeader shadow={false} floated={false} className=" md:h-full">
                <img
                    src={image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        ${price}
                    </Typography>
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/phones/${id}`}>
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        See Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
Phone.propTypes = {
    phone: PropTypes.array
}
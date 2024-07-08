import Phone from "../Phone/Phone";
import PropTypes from 'prop-types';

const Phones = ({phones}) => {
    
    return (
        <div className="py-5">
            <h1 className="text-2xl font-bold text-center">Ours phone Collections</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 py-10">
                {
                    phones?.map(phone=><Phone key={phones.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array
}

export default Phones;
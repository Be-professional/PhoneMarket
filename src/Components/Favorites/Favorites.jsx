import { useEffect } from "react";
import { useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {
    const [favorites, setFavorites]=useState([]);
    const [noFound, setNoFound]=useState('')
    const [isShow , setIsShow]=useState(false)
    const [totalPrice,  setTotalPrice] = useState(0)

    useEffect(()=>{
        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        if (favoriteItems) {
            setFavorites(favoriteItems);
            const total = favoriteItems.reduce((preValue,currentItem)=>preValue+currentItem.price ,0);
            setTotalPrice(total)
            
        }
        else{
            setNoFound("Don't have any item")
        }
    },[])
    console.log(favorites);

    const handleRemove=()=>{
        localStorage.clear()
        setFavorites([])
        setNoFound("Don't have any item")
    }
    
    console.log(isShow)

    return (
        <div>
            {
                noFound ? <p className="text-center md:py-72">{noFound}</p> : <div> 
                    {favorites.length > 0 && 
                    <div>
                        <button onClick={handleRemove} className="px-5 my-4 bg-red-400 flex mx-auto ">delete all favorites</button>
                        <h1>Total Price : {totalPrice} </h1>
                   </div>
                   
                    }
                    <div className="grid grid-cols-2 gap-2">
                       {
                        isShow ? favorites.map(phone=><FavoritesCard key={phone.id} phone={phone}></FavoritesCard>) 
                        :
                        favorites.slice(0 ,2).map(phone=><FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)

                       }
                    </div>

                    {
                        favorites.length >2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 my-4 bg-green-400 flex mx-auto ">{isShow ? "See Less" : "See more"}</button>
                    }
                </div>
            }
        </div>
    );
};

export default Favorites;
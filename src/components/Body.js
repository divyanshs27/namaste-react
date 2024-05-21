import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard
                name="Burger King"
                cuisines="Burger, North Indian"
                avgRating="4.9 star"
                deliveryTime="23 minutes"/>
                <RestaurantCard
                name="KFC"
                cuisines="Chicken, fried"
                avgRating="4.7 star"
                deliveryTime="32 minutes"/> */}
                {resList.map((restaurant)=>(
                     <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[0]}/> */}
            </div>
        </div>
    )
}
export default Body;
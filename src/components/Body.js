import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
const Body = ()=>{
    //let listOfRestaurants = resList;
    const [listOfRestaurants,setListOfRestaurants] = useState(
       [...resList]
    );
    useEffect(()=>{
        fetchData();
        console.log('useEffect called')
    }, [])
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.4594965&lng=77.0266383");
        const test_json = '{"name":"John", "age":30, "city":"New York"}';
        const json = await data.json();
        const json1 = JSON.parse(test_json);
        console.log(json1);
    }
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  
                    console.log("button clicked");
                    const filteredList = listOfRestaurants.filter((res)=> 
                        res.avgRating>4
                    );
                    console.log(filteredList);
                    setListOfRestaurants(  filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                     <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>
    )
}
export default Body;
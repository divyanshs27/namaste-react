import {CDN_URL} from '../utils/constants';
const styleCard = {
    backgroundColor: "#f0f0f0",
}
const RestaurantCard = (props) =>{
    const {resData} = props;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL
            +resData.cloudinaryImageId}/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.sla.deliveryTime}</h4>
        </div>
    )
};
export default RestaurantCard;
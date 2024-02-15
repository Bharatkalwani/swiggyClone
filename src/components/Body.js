import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
const Body = () => {
    const [restaurants, setRestaurants] = useState([])
    const [filterRestaurants, setFilterRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchItem, setSearchItem] = useState('')


    function getTopRatingRestaurants() {
        const filteredRestaurants = filterRestaurants.filter((item) => {
            return item.info.avgRating > 4.4
        })
        setFilterRestaurants(filteredRestaurants);
    }

    function getFilteredRestaurants() {
        const filteredRestaurants = restaurants.filter((item) => {
            return item.info.name.toLowerCase().includes(searchItem.toLowerCase())
        })
        setFilterRestaurants(filteredRestaurants);
    }

    const handleInputChange = (event) => {
        setSearchItem(event.target.value)
    }

    useEffect(() => {
        fetchData();
    }, [])
    // https://cors-anywhere.herokuapp.com/?
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const swiggyData = await response.json()
        setRestaurants(swiggyData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurants(swiggyData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setIsLoading(false)
    }

    return (
        <div className="body">
            <div className='filter'>
                <div className="search">
                    <input
                        type='text'
                        value={searchItem}
                        onChange={handleInputChange}
                        placeholder='Search for restaturants and foods'
                    ></input>
                    <button onClick={getFilteredRestaurants}>Search</button>
                </div>
                <button onClick={getTopRatingRestaurants}>Top Ratings</button>
            </div>
            <div className="res-container">
                {
                    isLoading ?
                        <Shimmer /> :
                        // Conditionally rendering the restaurant cards based on the availability of the mock data
                        filterRestaurants &&
                        filterRestaurants.map((item) => {
                            return <RestaurantCard key={item.info.id} resData={item} />
                        })
                }
            </div>
        </div>
    )
}

export default Body
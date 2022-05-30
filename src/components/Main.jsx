import React from "react";

export default function Main (props) {
  return (
    <div className="main">
        <img src={props.place.imageUrl} alt="mountain" className="img-main"/>
        <div className="container">
            <div className="place-info">
                <i class="fa-solid fa-location-dot"></i>
                <p className="country">{props.place.location.toUpperCase()}</p>
                <a href={props.place.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="location-name">{props.place.title}</h1>
            <p className="duration">{props.place.startDate} - {props.place.endDate}</p>
            <p className='description'>{props.place.description}</p>
        </div>
    </div>
  )
}

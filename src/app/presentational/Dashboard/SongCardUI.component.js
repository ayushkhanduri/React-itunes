import React from 'react';

import './css/songcard.css';

const SongCardUI = ({songsArr}) =>(
    <div className="all-cards">
        <h1 className="center"> Search Results </h1>
        <div className = "cards-container">
            {songsArr.map((item,index)=>(
                <div className="card-template" key={index} >
                    <img className="card-image" src={item.artworkUrl100} />
                    <div className="track-info"> 
                        <span className="track-name"> <b>Track Name: </b> {item.trackName}</span>
                        <span className="artist-name"> <b> Artist Name: </b> {item.artistName} </span>
                        <span className="time-span"><b> Length of the track</b> {((millis)=> {
                                let minutes = Math.floor(millis / 60000);
                                let seconds = ((millis % 60000) / 1000).toFixed(0);
                                return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
                            })(item.trackTimeMillis)
                        }</span>
                        <span className="buy"><b>Price :</b> {item.trackPrice} </span>
                    </div>
                    
                </div>

            ))}
            
        </div>
    </div>
);

export default SongCardUI;                                                              
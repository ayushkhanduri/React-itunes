import React from 'react';

import './css/songcard.css';

const SongCardUI = ({songsArr}) =>(
    <div className = "all-cards">
        {songsArr.map(item=>(
            <div className="card-template" >
                <img className="card-image" src={item.artworkUrl100} />
                <div className="track-info"> 
                    <span className="track-name">{item.trackName}</span>
                    <span className="artist-name"> {item.artistName} </span>
                    <span className="time-span"> {((millis)=> {
                            let minutes = Math.floor(millis / 60000);
                            let seconds = ((millis % 60000) / 1000).toFixed(0);
                            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
                        })(item.trackTimeMillis)
                    }</span>
                </div>
                <span className="buy">{item.trackPrice} </span>
            </div>

        ))}
        
    </div>
);

export default SongCardUI;                                                              
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import cancel from "./images/cancel.png";
import spotify from "./images/spotify.png";
import watson from "./images/watson.png";
import genius from "./images/genius.png";

class About extends Component{
    render(){
        return(
            <div className="about">


        <div className="header flexContainer default">
          <div className="aboutContainer">

            <Link className="link" to="/about">About</Link>
          </div>
          <div className="headerContainer">
          <h2>About the App</h2>
            <div className="iconTray">
              <div>Powered By:</div>
              <div className="iconContainer"><a href="https://developer.spotify.com/web-api/" target="_blank"><img className="iconImg" src={spotify} alt="Spotify"/></a></div>
              <div className="iconContainer"><a href="https://www.ibm.com/watson/services/tone-analyzer/" target="_blank"><img className="iconImg" src={watson} alt="Watson"/></a></div>
              <div className="iconContainer"><a href="https://genius.com/developers" target="_blank"><img className="iconImg" src={genius} alt="Genius"/></a></div>
            </div>
          </div>
          
        </div>
        <div className="header flexContainer responsive">
          <div className="aboutContainer">
          
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="headerContainer">
          <h2>About the App</h2>
            <div className="iconTray">
              <div>Powered By:</div>
              <div className="iconContainer"><a href="https://developer.spotify.com/web-api/" target="_blank"><img className="iconImg" src={spotify} alt="Spotify"/></a></div>
              <div className="iconContainer"><a href="https://www.ibm.com/watson/services/tone-analyzer/" target="_blank"><img className="iconImg" src={watson} alt="Watson"/></a></div>
              <div className="iconContainer"><a href="https://genius.com/developers" target="_blank"><img className="iconImg" src={genius} alt="Genius"/></a></div>
            </div>
          </div>
        </div>
         <div className="wrapper flexClass">
         <div className="iconContainer aboutContainer"><Link className="link" to="/"><img className="iconImg" src={cancel} alt="Exit"/></Link></div>
         <p>The search function uses the Spotify API to search for tracks.  Searching here will function exactly the same as searching "Songs" with the Spotify application.  Pressing the Watson API logo next to a given song will send a query to the Genius.com API to find the track on the site.  If the song is found, the lyrics of the song will be given to the Watson API.  The Watson API will generate what it interprets as the emotional content of that lyrics; the likelihood of Anger, Disgust, Fear, Sadness and Joy being present in the track.  This data gets visualized alongside "Tempo" and "Energy" stats provided by the Spotify API to create a dynamic graphic that represents the song.  If the given song is an instrumental the app should detect it as such as long as the song is present in Genius.com's site and the lyrics only contains the word "Instrumental".</p>
         </div>   










            
                
            

            </div>
        )
    }
}

export default About;
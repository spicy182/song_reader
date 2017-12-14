import React, {Component} from 'react';
import watson from "../images/watson.png";

//Song playing will have onClick={()=>this.props.setTone(arr[i].index)}

class searchList extends Component{
    constructor(){
        super();

        this.clickHandler = this.clickHandler.bind(this);
    }
    
    componentDidMount(){
       // console.log(document.getElementById("play-button"));
        if(document.getElementById("play-button"))
        {
            document.getElementById("play-button").addEventListener("click", this.clickHandler);
        }        
    }

    
    componentWillUnmount(){
        document.getElementById("play-button").removeEventListener("click", this.clickHandler);
    }
    clickHandler(event){
        alert("hello");
    }

    render(){

        let songData = this.props.searchResults.map((el,index,array)=>{

            return (
            <div className=" flexContainer">
                <div className="flexContainer musicBox">                          
                        <iframe ref={"music" + index} src={"https://open.spotify.com/embed?uri=" + this.props.searchResults[index].uri}
                            frameorder="0" allowtransparency="true" height="80px" width="100%"></iframe> 
                        <div className="watsonContainer">   
                            <img className="imgClick iconImg" src={watson} alt="genius" onClick={()=>this.props.inputTone(this.props.searchResults[index].name, this.props.searchResults[index].artists, this.props.searchResults[index].id)}/>
                        </div>
                </div>
            </div>
        )});
        return(

            <div>
            {songData}
            </div>
        )
    }
}

export default searchList;
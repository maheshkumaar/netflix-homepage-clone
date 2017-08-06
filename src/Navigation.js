import React,{ Component } from 'react';
import Screenshot1 from './Screenshot1.png';
import Screenshot2 from './Screenshot2.png';
import Screenshot3 from './Screenshot3.png';
import Screenshot4 from './Screenshot4.png';
import Screenshot5 from './Screenshot5.png';
import Screenshot6 from './Screenshot6.png';
import './Navigation.css';

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayBlocks:{}
        };
        this.navigate = this.navigate.bind(this);
    }
    componentDidMount(){
        let obj={
            block1:true,
            block2:false,
            block3:false
        };
        this.setState({
            displayBlocks:obj
        });
    }
    isActive(name){
        if(name === "Image1"){
            if(this.state.displayBlocks.block1 === true){
                return "linkImageActive";
            }else{
                return "linkImage";
            }
        }else if(name === "Image2"){
            if(this.state.displayBlocks.block2 === true){
                return "linkImageActive";
            }else{
                return "linkImage";
            }
        }else if(name === "Image3"){
            if(this.state.displayBlocks.block3 === true){
                return "linkImageActive";
            }else{
                return "linkImage";
            }
        }
    }
    navigate(event){
        let obj = {};
        if(event.target.alt === "Image1"){
            obj = {
                block1:true,
                block2:false,
                block3:false
            };
        }else if(event.target.alt === "Image2"){
            obj = {
                block1:false,
                block2:true,
                block3:false
            };
        }else if(event.target.alt === "Image3"){
            obj = {
                block1:false,
                block2:false,
                block3:true
            };
        }
        this.setState({
            displayBlocks:obj
        });
    }
   
    render(){
        let displayBlock;
        if(this.state.displayBlocks.block1){
            displayBlock = <div className="divBlockOne">
                                <div id="leftBlock">
                                    <p>If you decide Netflix isn't for you - no  problem. No commitment. Cancel online at any time. <br /><br />
                                    <button type="button" className="signUp">JOIN FREE FOR A MONTH</button></p>   
                                </div>
                                <div id="rightBlock">
                                    <img src={Screenshot4} alt="Image4" />
                                </div>
                            </div>;
        }else if(this.state.displayBlocks.block2){
            displayBlock =  <div className="divBlockTwo">
                                <img src={Screenshot5} alt="Image5" />
                            </div>;
        }else if(this.state.displayBlocks.block3){
            displayBlock = <div className="divBlockThree">
                                <img src={Screenshot6} alt="Image5" />
                            </div>;
        }
        
        return(
            <div className="NavigationContainer">
                <div className="HorizontalNav">
                    <div className="linkBlock">
                        <img src={Screenshot1} alt="Image1" className={this.isActive("Image1")} onClick={this.navigate}  />
                    </div>
                    <div className="linkBlock">
                        <img src={Screenshot2} alt="Image2" className={this.isActive("Image2")} onClick={this.navigate}  />
                    </div>
                    <div className="linkBlock">
                        <img src={Screenshot3} alt="Image3" className={this.isActive("Image3")} onClick={this.navigate}  />
                    </div>
                </div>
                {displayBlock}
            </div>
        );
    }
}

export default Navigation;

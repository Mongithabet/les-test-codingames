// Le composant de message contient un élément d'ancrage et un paragraphe sous l'ancre
// .Le rendu du paragraphe doit être basculé en cliquant sur l'élément d'ancrage en utilisant la logique suivante
// *Au début, le paragraphe ne doit pas être rendu
// *Après un clic, le paragraphe devrait être rendu
// *après un autre clic, le paragraphe ne doit pas être rendu
// terminer le composant de message en implémentant cette logique
import React, { Component,ReactDOM } from 'react'
export class Message extends React.Component {
 constructor(props) {
   super(props)
 
   this.state = {
      show:true
   }
 }

 handleClick = () => {
  this.setState({
    show:!this.state.show
  });

return  
};

  render() { return (
    
    
       <React.Fragment>
         {this.state.show ?
          (<div><a  href="#" onClick={this.handleClick}>Want to buy a new car?</a>  <p >Call +11 22 33 44 now!</p></div>)
     : <a  href="#" onClick={this.handleClick}>Want to buy a new car?</a>
      }
        </React.Fragment> 
 
    ); 
  }
}

 document.body.innerHTML = "<div id='root'> </div>";
  
 const rootElement = document.getElementById("root");
 //ReactDOM.render(<Message />, rootElement);
console.log("Before click: " + rootElement.innerHTML);
 //document.querySelector("a").click();
 console.log("After click: " + rootElement.innerHTML);
 
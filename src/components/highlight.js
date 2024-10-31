// Highlight.js
import React from 'react';
import './highlight.css';
import Bruschetta from '../images/brochetta.jpg';
import greeksalad from '../images/greeksalad.jpg';
import lemondessert from '../images/lemondessert.jpg';
import basket from '../images/basket.svg';

class Highlight extends React.Component {
    constructor(props) {
        super();
        this.highlightNum = props.highlightnum;
    }
    render(props) {

        if(this.highlightNum == 1) {
            var highlightData = {
                image: greeksalad,
                name: "Greek Salad",
                description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnised with crunchy garlic and rosemary croutons.",
            };
        } else if(this.highlightNum == 2) {
            var highlightData = {
                image: Bruschetta,
                name: "Bruschetta",
                description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            };
        } else {
            var highlightData = {
                image: lemondessert,
                name: "Lemon Dessert",
                description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            };
        }

        return (
            <article className="highlight">
                <img className="highlightImage" src={highlightData.image} alt="Salad"></img>
                <h3 className="highlightHeader">{highlightData.name}</h3>
                <p className="highlightDescription">{highlightData.description}</p>
                <h3 className="highlightFooter">Order for delivery<img className="highlightActionButton" src={basket}></img></h3>
            </article>
        );
    }
}

export default Highlight;
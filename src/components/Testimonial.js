import React from 'react';
import laura from '../images/Laura.jpg';
import jessica from '../images/Jessica.jpg';
import james from '../images/James.jpg';
import './Testimonial.css';

class Testimonial extends React.Component {
    constructor(props) {
        super();
        this.name = props.name;
        this.imageid = props.imageid;
        this.description = props.description;

        // determine image to load based on id
        if(props.imageid == 0) {
            this.image = laura;
        } else if(props.imageid == 1) {
            this.image = jessica;
        } else {
            this.image = james;
        }
    }

    render(props) {
        return (
            <article className="testimonial">
                <h3 style={this.nameStyle}>{this.name}</h3>
                <img src={this.image} alt="testimonial image"></img>
                <p>{this.description}</p>
            </article>
        );
    }
}

export default Testimonial;
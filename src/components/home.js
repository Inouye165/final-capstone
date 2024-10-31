// Home.js
import React from 'react';
import Highlight from './highlight.js';
import Testimonial from './Testimonial.js';
import './home.css';
import heroImage from '../images/restauranfood.jpg';

class Home extends React.Component {
    render(props) {
        return (
            <main className="home">
                <section className="hero oddSection">
                    <article>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Family owned Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern twist.</p>
                        <a href="/reservations">Reserve Table</a>
                    </article>
                    <img src={heroImage} alt="restaurant food"/>
                </section>
                <section className="highlights">
                    <h2>This Weeks Specials</h2>
                    <Highlight highlightnum={1}/>
                    <Highlight highlightnum={2}/>
                    <Highlight highlightnum={3}/>
                    <button>Online Menu</button>
                </section>
                <section className="Testimonials oddSection">
                    <h2>Testimonials</h2>
                    <Testimonial 
                        name={'Laura'}
                        imageid={0}
                        description={'The moussaka at Little Lemon is to die for! Authentic flavors and perfect seasoning—like a taste of Greece right here!.'}/>
                    <Testimonial 
                        name={'Jessica'}
                        imageid={1}
                        description={'Amazing gyro! Tender meat, fresh veggies, and that tzatziki... I’ll be back for sure.'}/>
                    <Testimonial 
                        name={'James'} 
                        imageid={2}
                        description={'Little Lemon’s baklava is heavenly. Crisp, sweet, and absolutely perfect!'}/>
                </section>
                <section className="about evenSection">
                    <article>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et metus nec libero ultricies posuere.</p>
                    </article>
                </section>
            </main>
        );
    }
}

export default Home;
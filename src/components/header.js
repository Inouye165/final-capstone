// Header.js
import React from "react";

class Header extends React.Component {

    render(props) {
        return (
            <head>
                <title>Little Lemon</title>
                <meta name="description" content="Little Lemon website"/>
                <meta name="og:title" content="Little Lemon website"/>
                <meta name="og:description" content="Little Lemon website"/>
                <meta name="og:image" content="http://localhost:3000/images/naviLogo.jpg"/>
            </head>
        );
    }
}

// export header
export default Header;

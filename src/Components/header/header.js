// Import necessary dependencies
import React from 'react';
import classes from './header.module.css';

// Define the 'Header' component as a functional component
function Header(props) {
    return (
        <>
        <header className={classes.headerContainer}>
            {/* Image element for the header */}
            <img className={classes.headerImage} src="https://gumlet.assettype.com/afaqs%2F2023-02%2Fae9d1abc-eceb-438b-aa93-18393534326a%2FBanijay_Asia.png?w=700&dpr=1.3" alt="Tata IPL 2023"/>            
            {/* Header title */}
            <h1 className={classes.headerTitle}>Indian Premier League 2023</h1>
        </header>
        </>
    );
}

export default Header;
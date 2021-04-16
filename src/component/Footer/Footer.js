import React from 'react';
import classes from './Footer.module.css';
import Card from './FooterComponent/Card';

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <div className={classes.divided}>
                <Card Heading={'COMPANY'} arr={['Blog','Investors','FeedBack','Ads']} />
            </div>
            <div className={classes.divided}>
                <Card Heading={'ABOUT'} arr={['Gift Cadr','Card Balcance Enquiry','FAQ']} />
            </div>
            <div className={classes.divided}>
                <Card Heading={'LEGAL'} arr={['Disclaimer','Terms & Conditions','Privacy Policy']} />
            </div>
            <div className={classes.divided}>
                <Card Heading={'SOCIAL MEDIA'} />
            </div>
            <div className={classes.LastElement}>
                <p>All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</p>
            </div>
        </div>
    )
}

export default Footer;

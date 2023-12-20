import React from 'react';
import '../styles/Home.css';
import mainImage from '../images/Resized_20220806_182805_remastered.png';
import secondImage from '../images/IMG_2404.png';

const Home = () => {
    return (
        <div>
            <div id='backgroundImageContainer'>
                <img src={mainImage} alt="Main" />
                <div id='textContainer'>
                    <h1>Alex & Joe</h1>
                    <h3>June 29th, 2024</h3>
                    <h3>Brule, WI</h3>
                    {/* <button>RSVP</button> */}
                </div>
            </div>
            <div id='home-full-width-banner'>
                <div id='home-banner-image'>
                    <img src={secondImage} alt="Banner" />
                    <h1>Another image</h1>
                </div>
                <div id='home-banner-text'>
                    <h1>Save The Date</h1>
                    <p>Dear Family and Friends,</p>
                    <p>We are thrilled to announce our engagement, and we want you to be a part of our wedding! Save the date for the celebration of our love as we embark on this chapter together. Please enjoy this exclusive sneak peek into the magic that awaits. As we continue to plan and prepare for our special day, we'll be updating this space with all the exciting details. So, mark your calendars, stay tuned, and join us in counting down the days to a day filled with love, joy, and cherished moments. Your presence means the world to us, and we can't wait to share this joyous occasion with each and every one of you. Thank you for being a part of our journey!</p>
                </div>
            </div>
            <div id='mobile-only-second-image'>
                <img src={secondImage} alt="Banner" />
            </div>
            <div id='mobile-only-paragraph'>
                <h1>Save The Date</h1>
                <p>Dear Family and Friends,</p>
                <p>We are thrilled to announce our engagement, and we want you to be a part of our wedding! Save the date for the celebration of our love as we embark on this chapter together. Please enjoy this exclusive sneak peek into the magic that awaits. As we continue to plan and prepare for our special day, we'll be updating this space with all the exciting details. So, mark your calendars, stay tuned, and join us in counting down the days to a day filled with love, joy, and cherished moments. Your presence means the world to us, and we can't wait to share this joyous occasion with each and every one of you. Thank you for being a part of our journey!</p>
            </div>
        </div>
    );
}

export default Home;

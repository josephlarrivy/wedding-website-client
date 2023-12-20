
import Map from '../common/Map'
import ImageCollage from '../common/ImageCollage'

import imageOne from '../images/brb1.jpg';
import imageTwo from '../images/brb2.jpg';
import imageThree from '../images/brb3.jpg';
import imageFour from '../images/brb4.jpg';
import imageFive from '../images/brb5.jpg';
import imageSix from '../images/brb6.jpg';
import imageSeven from '../images/brb7.jpg';
import imageEight from '../images/brb8.jpg';
import imageNine from '../images/brb9.jpg';

import '../styles/Location.css'

const Location = () => {

    return (
        <div id='location-container'>
            {/* <h1>Location</h1> */}
            <br></br>
            <p><b>Brule River Barn</b>
                <br></br>
                4492 S County Highway H
                <br></br>
                Brule, WI 54820</p>
            <br></br>
            <div id='map-outer-container'>
                <Map />
            </div>

            <br></br>
            <br></br>
            <div id='image-collage-outer-container'>
                <ImageCollage
                    image1={imageOne}
                    image2={imageTwo}
                    image3={imageThree}
                    image4={imageFour}
                    image5={imageFive}
                    image6={imageSix}
                    image7={imageSeven}
                    image8={imageEight}
                    image9={imageNine}
                />
            </div>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default Location;
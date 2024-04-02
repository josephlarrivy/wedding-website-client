
import oasisLogo from '../images/oasis_del_norte_logo.png'
import shanePic from '../images/shane_nelson_pic.png'
import maxLogo from '../images/maxLogo.png'
import '../styles/EventDetails.css'

const EventDetails = () => {



  return (
    <div id="event-details-container">
      <br />
      <h1>Event Details</h1>
      <br />
      <h2>Schedule</h2>
      <p>3:30pm - Ceremony</p>
      <p>4:00pm - Cocktail Hour</p>
      <p>5:00pm - Reception</p>
      <br />
      
      <div id='images-container'>
        <div className='image-and-caption-container'>
          <img src={oasisLogo}></img>
          <p>Food by Oasis Del Norte</p>
        </div>

        <div className='image-and-caption-container'>
          <img src={shanePic}></img>
          <p>Music by Shane Nelson</p>
        </div>

        <div className='image-and-caption-container'>
          <img src={maxLogo}></img>
          <p>Photography by Max Caven</p>
        </div>

      </div>

    </div>
  )
}

export default EventDetails;

import hotelIcon from '../images/icons8-bedroom-24.png'
import campingIcon from '../images/icons8-camping-24.png'
import cabinIcon from '../images/icons8-hut-24.png'
import '../styles/Lodging.css'

const Lodging = () => {


  return (
    <div id='lodging-container'>
      <br></br>
      <h1>Lodging Near Brule River</h1>
      <br></br>
      <div id='lodging-outer-container'>
        <div id='lodging-left-side'>
          <div id='hotel-and-miles-header'></div>
          <h2>Hotels in Superior</h2>
          <p>(30 miles or about 35 minutes to venue)</p>
          <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/superior/suewi/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-SUEWI" target="_blank">
            <img src={hotelIcon}></img>
            <p>Holiday Inn Express & Suites</p>
          </a>
          <br></br>
          <a href="https://www.hilton.com/en/hotels/suwhxhx-hampton-superior-duluth/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Hampton Inn</p>
          </a>
          <br></br>
          <a href="https://www.staycobblestone.com/wi/superior-cobblestone/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Cobblestone Hotel & Suites</p>
          </a>
          <br></br>
          <a href="https://www.barkersislandinn.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Barkers Island Inn</p>
          </a>

          <br></br>
          <br></br>
          <br></br>
          <h2>Cabins</h2>
          <a href="https://bruleriverclassics.com/" target="_blank">
            <img src={cabinIcon}></img>
            <p>Brule River Classics</p>
          </a>
          <br></br>
          <a href="https://bruleriverlakeviewlodge.com/" target="_blank">
            <img src={cabinIcon}></img>
            <p>Brule River Lakeview Lodge</p>
          </a>
          <br></br>
          <a href="https://www.trilaketimbers.com/home.html" target="_blank">
            <img src={cabinIcon}></img>
            <p>Tri Lake Timbers</p>
          </a>
          <br></br>
          <a href="https://buskeybayresort.com/" target="_blank">
            <img src={cabinIcon}></img>
            <p>Buskey Bay Resort</p>
          </a>

          <br></br>
          <br></br>
          <br></br>
          <h2>Search</h2>
          <a href="https://www.airbnb.com/s/Brule-River-Barn-Wedding-and-Event-Center--County-Road-H--Brule--WI--USA/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-01-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Brule%20River%20Barn%20Wedding%20and%20Event%20Center%2C%20Brule%2C%20WI&place_id=ChIJYdqYbjbCrlIRrc8WogZwtPI&date_picker_type=calendar&checkin=2024-06-28&checkout=2024-06-30&source=structured_search_input_header&search_type=autocomplete_click" target="_blank">
            <img src={cabinIcon}></img>
            <p>Search Airbnb</p>
          </a>
          <br></br>
          <a href="https://www.vrbo.com/search?adults=2&d1=2024-06-28&d2=2024-06-30&destination=Brule%2C%20Wisconsin%2C%20United%20States%20of%20America&endDate=2024-06-30&latLong=46.57686%2C-91.56832&mapBounds=46.36528%2C-91.77607&mapBounds=46.78761%2C-91.36057&neighborhood=&poi=&regionId=3000461510&selected=&semdtl=&sort=RECOMMENDED&startDate=2024-06-28&theme=&userIntent=" target="_blank">
            <img src={cabinIcon}></img>
            <p>Search VRBO</p>
          </a>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <div id='lodging-right-side'>
          <h2>Hotels in Duluth</h2>
          <p>(38 miles or about 50 minutes to venue)</p>
          <a href="https://odysseyresorts.com/beacon-pointe/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Beacon Pointe</p>
          </a>
          <br></br>
          <a href="https://www.liftbridgelodge.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Lift Bridge Lodge</p>
          </a>
          <br></br>
          <a href="https://innonlakesuperior.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Inn On Lake Superior</p>
          </a>
          <br></br>
          <a href="https://www.pierbresort.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Pier B Resort</p>
          </a>
          <br></br>
          <a href="https://www.canalparklodge.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>Canal Park Lodge</p>
          </a>
          <br></br>
          <a href="https://www.thesuitesduluth.com/" target="_blank">
            <img src={hotelIcon}></img>
            <p>The Suites</p>
          </a>

          <br></br>
          <br></br>
          <br></br>
          <h2>Camping</h2>
          <a href="http://www.topothemorn.com/" target="_blank">
            <img src={campingIcon}></img>
            <p>Top O' The Morn</p>
          </a>
          <br></br>
          <a href="https://dnr.wisconsin.gov/topic/StateForests/bruleriver/recreation/camping" target="_blank">
            <img src={campingIcon}></img>
            <p>Brule River State Forest</p>
          </a>
          <br></br>
          <a href="https://www.bayfieldcounty.wi.gov/238/Twin-Bear-Campground" target="_blank">
            <img src={campingIcon}></img>
            <p>Twin Bear Campground</p>
          </a>
        </div>
        
      </div>
      

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div id='disclaimer-container'>
        <p>Dear Guests,</p>
        <p>Please note that the accommodations listed on this site are for your convenience, and we do not endorse or guarantee availability or rates. Each guest is responsible for their own bookings, and we recommend verifying details directly with the accommodation. Please reach out if you have any questions.</p>
        <p>Thank you, and we look forward to celebrating with you!</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}

export default Lodging;
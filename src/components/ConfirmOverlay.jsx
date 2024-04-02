

import { useNavigate } from 'react-router-dom';
import '../styles/ConfirmOverlay.css'

const ConfirmOverlay = ({ setShowConfirmOverlay }) => {

  const navigateTo = useNavigate()



  const close = () => {
    setShowConfirmOverlay(false)
    navigateTo('/')
  }

  return (
    <div id='confirm-overlay-container'>
      <div id='confirm-overlay-text-container'>
        <h1>Thank you for your rsvp.</h1>
        <br />
        <button onClick={() => close()}>exit</button>
      </div>
    </div>
  )
}

export default ConfirmOverlay;
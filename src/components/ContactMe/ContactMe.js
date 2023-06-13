import React from 'react'
import { ConCon } from './ContactMe.styles'

const ContactMe = () => {
  return (
 <ConCon id='contact'>
   <form className="colorful-form">
  <div className="form-group">
    <label className="form-label" for="name">Name:</label>
    <input required="" placeholder="Enter your name" className="form-input" type="text"/>
  </div>
  <div className="form-group">
    <label className="form-label" for="email">Email:</label>
    <input required="" placeholder="Enter your email" className="form-input" name="email" id="email" type="email"/>
  </div>
  <div className="form-group">
    <label className="form-label" for="message">Message:</label>
    <textarea required="" placeholder="Enter your message" className="form-input" name="message" id="message"></textarea>
  </div>
  <button className="form-button" type="submit">Submit</button>
</form>
 </ConCon>
  )
}

export default ContactMe
import React from 'react'
import '../../styles/Contact.css';

function Contact() {
    return (
        <div className='contact-container'>
            <div className='greeting-container'>
                <h2>Let's Talk!</h2>
            </div>
            <div className='form-container'>
                <form className='contact-form'>
                    <label for='fname'>First Name *</label>
                    <input type='text' id='fname' name='firstname'></input>
                    <label for='lname'>Last Name *</label>
                    <input type='text' id='lname' name='lastname'></input>
                    <label for='email'>Email *</label>
                    <input type='email' id='email'></input>
                    <label for='subject'>Subject *</label>
                    <input type='text' id='subject'></input>
                    <div className='message-container'>
                        <label for='message'>Message *</label>
                        <input type='text' id='message'></input>
                    </div>
                    <div className='submitBttn'>
                        <input type='submit' value='Submit'></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact


import React from 'react'
import '../../styles/Contact.css';


class Contact extends React.Component {


    state = {
        email: { 
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    };

    sendEmail = _ => {
        const {email} = this.state;
        alert(email.firstName + " " + email.lastName) 
        fetch(`http://127.0.0.1:5000/send-email?firstName=${email.firstName}&lastName=${email.lastName}&sender=${email.email}&topic=${email.subject}&text=${email.message}`) //query string url
        .catch(err => console.error(err))
    }


    render() {
        const { email } = this.state;
        return (
            <div className='contact-container'>
                <div className='greeting-container'>
                    <h2>Let's Talk!</h2>
                </div>
                <div className='form-container'>
                    <form className='contact-form'>
                        <label for='fname'>First Name *</label>
                        <input type='text' id='fname' name='firstname' value={email.firstName} 
                            onChange={e => this.setState({ email: { ...email, firstName: e.target.value } })} />
                        <label for='lname'>Last Name *</label>
                        <input type='text' id='lname' name='lastname' value={email.lastName} 
                            onChange={e => this.setState({ email: { ...email, lastName: e.target.value } })} />
                        <label for='email'>Email *</label>
                        <input type='email' id='email' value={email.email} 
                            onChange={e => this.setState({ email: { ...email, email: e.target.value } })} />
                        <label for='subject'>Subject *</label>
                        <input type='text' id='subject' value={email.subject} 
                            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        <div className='message-container'>
                            <label for='message'>Message *</label>
                            <input type='text' id='message' value={email.message} 
                                onChange={e => this.setState({ email: { ...email, message: e.target.value } })} />
                        </div>
                        <div onClick={this.sendEmail} className='submitBttn'>
                            <input type='submit' value='Submit'></input>
                        </div>
                    </form>
                </div>
            </div>
            );
        }
}

export default Contact

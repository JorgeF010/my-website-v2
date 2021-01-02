
import React from 'react'
import '../../styles/Contact.css';


class Contact extends React.Component {


        constructor(props) {
            super(props);
            this.state = {
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            this.setState({
                firstName: e.target.firstName,
                lastName: e.target.lastName,
                email: e.target.email,
                subject: e.target.subject,
                message: e.target.message
            });
        }

        handleSubmit(e) {
            alert('Your email has been sent!');
            
        }


        render() {
            return (
                <div className='contact-container'>
                    <div className='greeting-container'>
                        <h2>Let's Talk!</h2>
                    </div>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit} className='contact-form'>
                            <label for='fname'>First Name *</label>
                            <input type='text' id='fname' name='firstname' value={this.state.firstName} onChange={this.handleChange}/>
                            <label for='lname'>Last Name *</label>
                            <input type='text' id='lname' name='lastname' value={this.state.lastName} onChange={this.handleChange}/>
                            <label for='email'>Email *</label>
                            <input type='email' id='email' value={this.state.email} onChange={this.handleChange}/>
                            <label for='subject'>Subject *</label>
                            <input type='text' id='subject' value={this.state.subject} onChange={this.handleChange}/>
                            <div className='message-container'>
                                <label for='message'>Message *</label>
                                <input type='text' id='message' value={this.state.message} onChange={this.handleChange}/>
                            </div>
                            <div className='submitBttn'>
                                <input type='submit' value='Submit'></input>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
}

export default Contact

import React from "react";

function ContactForm() {
    //jsx
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
            {/* //name */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
            {/* //email */}
            <div>
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" />
            </div>
            {/* //message */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
        </form>

    </section>
}

export default ContactForm;
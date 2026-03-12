const ContactForm = () => {
    return(
        <div>
        <input 
          type='text'
          placeholder='Enter Your Name'
        /><br/><br/>
        <input
           type='email'
           placeholder='Enter Your email'   
        /><br/><br/>
        <textarea
           placeholder='Enter Message'
        /><br/><br/>
        <button type='submit'>Submit</button>
   
        </div>
    )
}

export default ContactForm;
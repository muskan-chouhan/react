import { useFormStatus } from 'react-dom'
const ContactForm = () => {
    return(
      <>
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
        <button type='submit' disabled = 'pending' >Submit</button>
    </>
        
    )
}

export default ContactForm;
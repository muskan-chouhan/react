import { useFormStatus } from 'react-dom'
const ContactForm = () => {

    const { pending } = useFormStatus();
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
        
        <button type='submit' disabled = {pending} >{pending ? 'submitting...' : 'Submit'}</button>
    </>
        
    )
}

export default ContactForm;
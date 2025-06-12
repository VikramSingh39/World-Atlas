import React from 'react'

const Contact = () => {
   const handleFormSubmit = (formData)=>{
   Object.fromEntries(formData.entries());
   }

  return (
      <section className='section-contact'>
       <h2 className='container-title'>Contact Us</h2>

       <div className="contact-wrapper container">
       <form action={handleFormSubmit} >
        <input type="text" required
        autoComplete='false'
        placeholder='Enter Your Name' 
        name='username'
        className='form-control'/>

        <input type="email" required
        autoComplete='false'
        placeholder='Enter your email' 
        name='email'
        className='form-control'/>
        
        <textarea className='form-control' 
        rows="10"
        placeholder='Enter you message'
        required name="message" autoComplete='false' id=""></textarea>

        <button type='submit' 
        value="send">Send</button>
       </form>
       </div>


      </section>
  )
}

export default Contact
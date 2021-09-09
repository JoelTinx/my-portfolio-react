import React from 'react'

import ContentContainer from '../../components/ContentContainer/ContentContainer'

import './Contact.scss';

const Contact = () => {
  return (
    <ContentContainer>
      <div className="section_title">
        <p>
          GET IN TOUCH
        </p>
      </div>
      <div className="section_content">
        <div className="hobby">
          <p>
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div className="topic">
          <h5>Email:</h5>
          <p>dtinocorojas@outlook.com</p>
        </div>
        <div className="topic">
          <h5>Mobile:</h5>
          <p>+51 988 906 342</p>
        </div>
        <div className="topic">
          <h5>Address:</h5>
          <p>Lima - Perú</p>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Contact

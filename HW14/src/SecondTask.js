import React, { useState, useRef } from 'react';

function SecondTask() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    city: '',
  });

  const fullNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();

  const handleInputChange = (event) => {
      const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Personal page</h1>
      <form>
        <div>
          <label>Full name:</label>
          <input
            type="text"
            name="fullName"
            ref={fullNameRef}
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Telephone:</label>
          <input
            type="text"
            name="phoneNumber"
            ref={phoneNumberRef}
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            ref={emailRef}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            ref={cityRef}
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SecondTask;
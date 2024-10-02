import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    presenters: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Number of presenters</label>
          <select
            name="presenters"
            value={formData.presenters}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              - select -
            </option>
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="11+">11+</option>
          </select>
        </div>

        <div className="input-group">
          <label>Work email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone number (optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+0 (123) 456-7890"
          />
          <small>Please include country/region code</small>
        </div>

        <div className="input-group">
          <label>How can our Sales Team help you? (optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength="500"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Get in touch
        </button>

        <p className="terms-text">
          By sending this form, you accept our <a href="#">terms of use</a> and{" "}
          <a href="#">policies</a>.
        </p>
      </form>
    </div>
  );
};

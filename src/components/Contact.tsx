import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      // Trigger the download
      const link = document.createElement("a");
      link.href = "/Shiven_(NormalResume)Gohil.pdf";
      link.download = "Shiven_(NormalResume)Gohil.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clear form
      setFormData({ name: "", phone: "", email: "" });
      alert("Opening your download for Shiven's Resume!");
    } else {
      alert("Please fill in your Name and Email to proceed.");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-form-wrapper">
          <div className="contact-form-intro">
            <h4>Get My Resume</h4>
            <p>Enter your details to instantly download my latest resume and portfolio details.</p>
          </div>

          <form className="contact-form" onSubmit={handleDownload}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact-submit" data-cursor="disable">
              DOWNLOAD RESUME <MdArrowOutward />
            </button>
          </form>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:shivengohil210204@gmail.com" data-cursor="disable">
                shivengohil210204@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919228456781" data-cursor="disable">
                +91 92284 56781
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ShivenGohil21"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shiven-gohil"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box header-footer-text">
            <h2>
              Full Stack Web Developer <br /> by <span>Shiven Gohil</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true;
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
    return nameRegex.test(name);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    // Silently ignore bot submissions that fill the hidden honeypot field
    if (honeypot) {
      console.warn("Bot submission detected.");
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedEmail) {
      alert("Please fill in your Name and Email to proceed.");
      return;
    }

    if (!validateName(trimmedName)) {
      alert("Please enter a valid Name (letters, spaces, hyphens, and apostrophes; 2-50 characters).");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (trimmedPhone && !validatePhone(trimmedPhone)) {
      alert("Please enter a valid Phone Number (10 to 20 digits, spaces, dashes, or parentheses).");
      return;
    }

    // Trigger the download
    const link = document.createElement("a");
    link.href = "/Shiven-Gohil.pdf";
    link.download = "Shiven-Gohil.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear form
    setFormData({ name: "", phone: "", email: "" });
    setHoneypot("");
    alert("Opening your download for Shiven's Resume!");
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
            {/* Honeypot field hidden from real users, but targets automated spam bots */}
            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                name="b_website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={50}
                pattern="^[a-zA-Z\s\-']{2,50}$"
                title="Only letters, spaces, hyphens, and apostrophes (2 to 50 characters)"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                pattern="^\+?[0-9\s\-()]{10,20}$"
                title="10 to 20 digits, optional spaces, dashes, parentheses or starting plus (+)"
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
                maxLength={100}
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
              <a href="tel:+919879621675" data-cursor="disable">
                +91 9879621675
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

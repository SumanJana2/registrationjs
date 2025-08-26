import  {useState} from "react";

const Registrationform = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    location: "",
    contactNo: "",
    emailId: "",
  });

  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    let newErrors = {};

    // Username: only letters and digits, first character must be a letter
    if (!/^[A-Za-z][A-Za-z0-9]*$/.test(formData.username)) {
      newErrors.username =
        "Username must start with a letter and contain only letters and digits.";
    }

    // Password: minimum 5 chars, at least 1 letter, 1 digit, 1 special char
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{5,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 5 characters with 1 letter, 1 digit, and 1 special character.";
    }

    // Contact No: exactly 10 digits
    if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be exactly 10 digits.";
    }

    // Email: must be valid format
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.emailId)
    ) {
      newErrors.emailId = "Invalid email format.";
    }

    // Location: required
    if (!formData.location) {
      newErrors.location = "Please select a location.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `Form Data:\nUsername: ${formData.username}\nPassword: ${formData.password}\nLocation: ${formData.location}\nContact No: ${formData.contactNo}\nEmail: ${formData.emailId}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Registration Form </h2>

        {/* Username */}
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange}/>
          {errors.username && (<p>{errors.username}</p>)}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
          {errors.password && (<p>{errors.password}</p>)}
        </div>

        {/* Location Dropdown */}
        <div>
          <label>Location</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">-- Select Location --</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
          {errors.location && (<p>{errors.location}</p>)}
        </div>

        {/* Contact No */}
        <div>
          <label>Contact No</label>
          <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange}/>
          {errors.contactNo && (<p>{errors.contactNo}</p>)}
        </div>

        {/* Email ID */}
        <div>
          <label >Email ID</label>
          <input type="email" name="emailId" value={formData.emailId} onChange={handleChange}/>
          {errors.emailId && (<p>{errors.emailId}</p>)}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registrationform;

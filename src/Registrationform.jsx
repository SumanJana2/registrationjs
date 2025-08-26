import  { useState } from "react";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Registration Form
        </h2>

        {/* Username */}
        <div className="mb-3">
          <label className="block font-medium">Username</label>
          <input
            type="text"
            name="username"
            className="border p-2 w-full rounded"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="border p-2 w-full rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Location Dropdown */}
        <div className="mb-3">
          <label className="block font-medium">Location</label>
          <select
            name="location"
            className="border p-2 w-full rounded"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Location --</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
          </select>
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>

        {/* Contact No */}
        <div className="mb-3">
          <label className="block font-medium">Contact No</label>
          <input
            type="text"
            name="contactNo"
            className="border p-2 w-full rounded"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
          {errors.contactNo && (
            <p className="text-red-500 text-sm">{errors.contactNo}</p>
          )}
        </div>

        {/* Email ID */}
        <div className="mb-3">
          <label className="block font-medium">Email ID</label>
          <input
            type="email"
            name="emailId"
            className="border p-2 w-full rounded"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
          {errors.emailId && (
            <p className="text-red-500 text-sm">{errors.emailId}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-2xl w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registrationform;

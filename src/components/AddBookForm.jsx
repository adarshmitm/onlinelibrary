import React, { useState } from "react";

const AddBookForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    price: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); // Preview selected image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        id: Date.now(), // Generate a unique ID
        rating: parseFloat(formData.rating), // Convert rating to a number
      });
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "image") {
        validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg">
      {["title", "author", "category", "description", "rating", "price"].map((field) => (
        <div key={field}>
          <label className="block text-gray-700">
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            type={field === "rating" ? "number" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          {errors[field] && <p className="text-red-500">{errors[field]}</p>}
        </div>
      ))}
      
      {/* Image Upload */}
      <div>
        <label className="block text-gray-700">Cover Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-32 object-cover rounded" />}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;

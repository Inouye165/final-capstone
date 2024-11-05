// api.js
export const fetchAPI = async (date) => {
  // Simulate fetching available times from an API
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

export const submitAPI = (formData) => {
  // Simulate submitting the form data to an API
  console.log('Form Data Submitted:', formData);
  return true; // Return true to simulate a successful submission
};

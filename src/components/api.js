// api.js

// Mock implementation of fetchAPI
// api.js

export const fetchAPI = (date) => {
    console.log("fetchAPI called with date:", date); // Log to check if function is called
    // Return a static list of times for testing
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };
  
  
  // Mock implementation of submitAPI (optional)
  export const submitAPI = (formData) => {
    // Simulate a successful submission
    return true;
  };

// // src/components/Login.js
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);

//         // Redirect to restaurant listing after successful login
//         navigate('/restaurant-listing');
//       } else {
//         const errorData = await response.json();
//         console.error('Login failed:', errorData.error);
//         // You can display an error message to the user
//       }
//     } catch (error) {
//       console.error('Error during login:', error.message);
//       // Handle network errors or other issues
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>

//       {/* Display success message if redirected from signup with success */}
//       {location.state && location.state.signupSuccess && (
//         <p>Sign Up successful. Please log in.</p>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ width: '400px' }}  // Adjust the width as needed
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ width: '400px' }}  // Adjust the width as needed
//           />
//         </div>
//         <br />
//         <button type="submit">Login</button>
//       </form>

//       {/* Link to signup page */}
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </div>
//   );
// };

// export default Login;








// // src/components/Login.js
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here (replace the console.log statement)
//     console.log('Simulating login process:', formData);

//     // Redirect to restaurant listing after successful login
//     navigate('/restaurant-listing');
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>

//       {/* Display success message if redirected from signup with success */}
//       {location.state && location.state.signupSuccess && (
//         <p>Sign Up successful. Please log in.</p>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={{ width: '400px' }}  // Adjust the width as needed
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={{ width: '400px' }}  // Adjust the width as needed
//           />
//         </div>
//         <br />
//         <button type="submit">Login</button>
//       </form>

//       {/* Link to signup page */}
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login API endpoint
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to restaurant listing after successful login
        navigate('/restaurant-listing');
      } else {
        // Handle authentication failure (e.g., display an error message)
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      {/* Display success message if redirected from signup with success */}
      {location.state && location.state.signupSuccess && (
        <p>Sign Up successful. Please log in.</p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '400px' }}  // Adjust the width as needed
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '400px' }}  // Adjust the width as needed
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      {/* Link to signup page */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;

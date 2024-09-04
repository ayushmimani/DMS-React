import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form = ({ setuser, setshownform }) => {
  const [userinfo, setuserinfo] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  // Fetch user details for editing or initialize form for adding new user
  useEffect(() => {
    
    if (setuser > 0) {
      fetch(`http://127.0.0.1:8000/api/users/show/${setuser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setuserinfo({ name: data.name, email: data.email, password: '' }); // Reset password for security
        })
        .catch(error => console.error('Error fetching user data:', error));
    } else {
      setuserinfo({ name: '', email: '', password: '' });
    }
  }, [setuser]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserinfo(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = setuser > 0 ? 'PUT' : 'POST';
    const url = setuser > 0
      ? `http://127.0.0.1:8000/api/users/edit/${setuser}`
      : 'http://127.0.0.1:8000/api/users/add';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userinfo),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Handle successful response
      })
      .then(() => setshownform(-1)) // Return to user list
      .catch(error => console.error('Error saving user:', error));
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 3,
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        User Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={userinfo.name}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={userinfo.email}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={userinfo.password}
            onChange={handleChange}
            required
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={() => setshownform(-1)}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
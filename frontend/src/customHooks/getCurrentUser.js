
import React from 'react'

function getCurrentUser() {
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('No token found');
          return;
        }
        const response = await fetch('http://localhost:8000/api/auth/getCurrentUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            


}


export default getCurrentUser

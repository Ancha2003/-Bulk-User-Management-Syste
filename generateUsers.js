const axios = require("axios");

const users = [];

for (let i = 1; i <= 5000; i++) {
  users.push({
    fullName: `User ${i}`,
    email: `user${i}@gmail.com`,
    phone: `900000${1000 + i}`
  });
}

async function sendUsers() {
  try {

    const res = await axios.post(
      "http://localhost:5000/api/users/bulk-create",
      users,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("SUCCESS:", res.data);

  } catch (err) {

    if (err.response) {
      console.log("SERVER ERROR:", err.response.data);
    } else {
      console.log("REQUEST ERROR:", err.message);
    }

  }
}

sendUsers();
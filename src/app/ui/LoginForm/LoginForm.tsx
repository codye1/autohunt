import React from 'react';
import "./login.css"

const LoginForm = () => {
  return (
    <form action="" >
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Password
        <input type="text" />
      </label>
    </form>
  );
};

export default LoginForm;
import React from "react";

const Logoin = () => {
  return (
    <div>
      <form action='/api/register' method="POST">
        <input type="email" name='email' placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>button</button>
      </form>
    </div>
  );
};

export default Logoin;

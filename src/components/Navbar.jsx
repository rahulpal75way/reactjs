import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex justify-center items-center gap-x-6.5 text-lg ">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">Sign Up</li>
        <li className="hover:underline">Sign In</li>
        <li className="hover:underline">About Us</li>
      </ul>
    </div>
  );
}

export default Navbar
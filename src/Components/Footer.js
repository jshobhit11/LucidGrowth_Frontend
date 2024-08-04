import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Shobhit Jain</p>
      <p>
        Connect with me:{" "}
        <a href="mailto:jane.doe@example.com" className="underline">
          jshobhit3020@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;

import "./Footer.css";

import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    return () => {
      console.log("The footer died!");
    };
  }, []);

  return <footer className="footer">Footer</footer>;
}

export default Footer;

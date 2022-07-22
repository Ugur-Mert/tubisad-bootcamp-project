import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { AiOutlineArrowUp } from "react-icons/ai";

export default function BackToTopButton() {
  const [backTop, setBackTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backTop && (
        <Button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "25px",
          }}
          onClick={scrollUp}
          variant="outline-light"
        >
          <AiOutlineArrowUp />
        </Button>
      )}
    </div>
  );
}

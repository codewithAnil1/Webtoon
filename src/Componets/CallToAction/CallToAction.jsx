import React, { useState, useRef } from "react";
import "./CallToAction.css";
import img1 from "./197033.jpg";
function CallToAction() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setShowContent(true);
    // Smooth scroll to the content section
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta-section">
      <button className="cta-button" onClick={handleClick}>
        Read More
      </button>

      {/* Hidden content section */}
      {showContent && (
        <div className="content-section" ref={contentRef}>
          <img src={img1} alt="Example" className="content-image" />
          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vehicula dapibus mauris. Fusce vulputate eleifend sapien. Vestibulum
            purus quam, scelerisque ut, mollis sed, nonummy id, metus.n Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            recusandae illo dolore et dolorem ea! Quod voluptas odio accusantium
            assumenda molestiae hic repellendus doloribus ratione autem,
            deserunt corporis animi nobis ducimus fugit porro quaerat cumque.
            Suscipit ratione ducimus tempore eum illum magnam, sint porro
            debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam molestiae aut velit, nulla tempore fugit beatae. Est rerum
            eum itaque velit. Ullam dolores, nostrum nam, qui odit eligendi
            consequatur delectus sit accusamus hic distinctio voluptate! Enim
            pariatur quo dolorem ipsum unde, obcaecati nemo odio, incidunt
            eaque, quod illo exercitationem beatae excepturi? Quisquam
            exercitationem tempore impedit veniam reiciendis quam possimus.
          </p>
        </div>
      )}
    </section>
  );
}

export default CallToAction;

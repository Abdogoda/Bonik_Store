import React from "react";
import "./about.css";
function About() {
  return (
    <section>
      <h1
        style={{
          textAlign: "center",
          color: "var(--red)",
          marginBottom: "2rem",
        }}
      >
        About Us
      </h1>
      <div className="container about-container">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          tenetur repellendus omnis eos repudiandae, asperiores sint! Iusto unde
          earum fugiat natus, laudantium commodi, quaerat, doloremque
          accusantium fugit culpa ducimus voluptate vitae? Quidem, perspiciatis
          doloremque sapiente est libero facilis mollitia consectetur.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          tenetur repellendus omnis eos repudiandae, asperiores sint! Iusto unde
          earum fugiat natus, laudantium commodi, quaerat, doloremque
          accusantium fugit culpa ducimus voluptate vitae? Quidem, perspiciatis
          doloremque sapiente est libero facilis mollitia consectetur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusamus repellat fugiat earum, quos rerum molestias eligendi quidem
          dolor, commodi laudantium, non neque vitae. Praesentium consequuntur
          exercitationem voluptatem in quaerat.
        </p>
      </div>
    </section>
  );
}

export default About;

import React from "react";

export default function Contacts() {
  return (
    <div className="ContactBox">
      <h2>Contacts Us</h2>
      <p>
        Got a question? we would like to hear from you.Send us a message and we<br/>
        will reply as soon as possible
      </p>
      <form>
        <span>Name : </span>
        <input type="text" className="form"/>
        <span>Email : </span>
        <input type="mail" className="form"/>
        <span>Enter your message : </span>
        <textarea className="form"/>
        <button className="form">Send Message</button>
      </form>
    </div>
  );
}

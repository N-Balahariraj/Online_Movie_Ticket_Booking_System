import React from "react";

export default function MenuCards(props) {
  return (
    <div className="Menucard">
      <div className="CardItem Location">
        <span>Andhra Pradesh</span>
        <span>Arunachal Pradesh</span>
        <span>Assam</span>
        <span>Bihar</span>
        <span>Chhattisgarh</span>
        <span>Goa</span>
        <span>Gujarat</span>
        <span>Haryana</span>
        <span>Himachal Pradesh</span>
        <span>Jharkhand</span>
        <span>Karnataka</span>
        <span>Kerala</span>
        <span>Madhya Pradesh</span>
        <span>Maharashtra</span>
        <span>Manipur</span>
        <span>Meghalaya</span>
        <span>Mizoram</span>
        <span>Nagaland</span>
        <span>Odisha</span>
        <span>Punjab</span>
        <span>Rajasthan</span>
        <span>Sikkim</span>
        <span>Tamil Nadu</span>
        <span>Telangana</span>
        <span>Tripura</span>
        <span>Uttar Pradesh</span>
        <span>Uttarakhand</span>
        <span>West Bengal</span>
      </div>
      <div className="CardItem Date">
        <input type="date" />
      </div>
      <div className="CardItem Language">
        <span>English</span>
        <span>Hindi</span>
        <span>Tamil</span>
        <span>Telugu</span>
        <span>Malayalam</span>
        <span>Kannada</span>
      </div>
      <div className="CardItem Genere">
        <span>Horror</span>
        <span>Thriller</span>
        <span>Action</span>
        <span>Drama</span>
        <span>Scientific Fiction</span>
        <span>Crime</span>
        <span>Comedy</span>
        <span>Romance</span>
        <span>Adventure</span>
      </div>
      <div className="CardItem Ratings">
        <span>4.5 - 5.0</span>
        <span>4.0 - 4.5</span>
        <span>3.5 - 4.0</span>
        <span>3.0 - 3.5</span>
      </div>
      <div className="CardItem Price">
        <span>Above ...2000</span>
        <span>1000 - 2000</span>
        <span>500 - 1000</span>
        <span>100 - 500</span>
      </div>
    </div>
  );
}

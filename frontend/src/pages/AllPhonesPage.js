import React, { useEffect, useState } from "react";
import PhoneCard from "../components/cards/PhoneCard/PhoneCard";
import { getAllPhones } from "../services/phones-service";
import { Link } from "react-router-dom";

const AllPhonesPage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    getAllPhones().then(setPhones);
  }, []);

  return (
    <div>
      {phones.map((phone) => (
        <Link to={`/phones/${phone.id}`}>
          <PhoneCard key={phone.id} phone={phone} />
        </Link>
      ))}
    </div>
  );
};

export default AllPhonesPage;

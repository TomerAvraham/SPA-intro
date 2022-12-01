import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoneById } from "../services/phones-service";
import PhoneCard from "../components/cards/PhoneCard/PhoneCard";
import { isObjectEmpty } from "../utils/utils";
import PhoneCardSkeleton from "../components/cards/PhoneCard/PhoneCardSkeleton";

const SinglePhonePage = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState({});

  useEffect(() => {
    getPhoneById(phoneId).then(setPhone);
  }, [phoneId]);

  return (
    <div>
      {Object.keys(phone).length ? (
        <PhoneCard phone={phone} />
      ) : (
        <PhoneCardSkeleton />
      )}
    </div>
  );
};

export default SinglePhonePage;

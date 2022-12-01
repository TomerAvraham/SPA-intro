import React from "react";
import {
  PhoneCardContainer,
  PhoneCardMedia,
  PhoneCardTitle,
  PhoneCardProperty,
} from "./PhoneCard.style";
import { addImageEndPointUrl } from "../../../utils/image-utils";

const PhoneCard = ({ phone }) => {
  return (
    <PhoneCardContainer>
      <PhoneCardMedia src={addImageEndPointUrl(phone.image)} />
      <PhoneCardTitle>
        {phone.brand} - {phone.model}
      </PhoneCardTitle>
      <PhoneCardProperty>color: {phone.color}</PhoneCardProperty>
      <PhoneCardProperty>SSD: {phone.SSD}GB</PhoneCardProperty>
    </PhoneCardContainer>
  );
};

export default PhoneCard;

import React from "react";
import {
  PhoneCardContainer,
  PhoneCardMediaSkeleton,
  PhoneCardPropertySkeleton,
} from "./PhoneCard.style";

const PhoneCardSkeleton = () => {
  return (
    <PhoneCardContainer>
      <PhoneCardMediaSkeleton />
      <PhoneCardPropertySkeleton />
      <PhoneCardPropertySkeleton />
      <PhoneCardPropertySkeleton />
    </PhoneCardContainer>
  );
};

export default PhoneCardSkeleton;

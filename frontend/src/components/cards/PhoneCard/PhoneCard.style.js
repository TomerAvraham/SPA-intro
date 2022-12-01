import styled from "@emotion/styled";

export const PhoneCardContainer = styled.div((props) => ({
  backgroundColor: "#ecf0f1",
  width: 300,
  height: 400,
  margin: "15px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 10,
}));

export const PhoneCardMedia = styled.img(() => ({
  width: "90%",
  aspectRatio: "1 / 1",
}));

export const PhoneCardTitle = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
`;

export const PhoneCardProperty = styled.p`
  font-size: 1rem;
  margin-top: 5px;
`;

export const PhoneCardMediaSkeleton = styled.div`
  width: 90%;
  aspect-ratio: 1/1;
  background-color: #95a5a6;
`;

export const PhoneCardPropertySkeleton = styled.div`
  width: 90%;
  margin-top: 5px;
  background-color: #95a5a6;
  height: 10px;
`;

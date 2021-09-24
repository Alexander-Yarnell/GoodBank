import React from "react";
import Card from "./card";
import bankImg from "./bank.png";

export default function Home() {
  return (
    <Card
      txtcolor="black"
      header="GoodBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={<img src={bankImg} className="img-fluid" alt="Responsive image" />}
    />
  );
}

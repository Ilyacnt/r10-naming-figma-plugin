import React from "react";
import Select from "../ui/Select";
import Input from "../ui/Input";

const Default = () => {
  const offersData = [
    "_1FIT_",
    "_1INCH_",
    "_3COMMAS_",
    "_ALFACAPITAL_",
    "_ALLGODSACADEMY_",
    "_ANIMALGARDEN_",
    "_ANON_",
    "_DOMINO_",
    "_DOMINOES_",
    "_DOZARPLATI_",
    "_DREAM_",
    "_EAPTEKA_",
    "_EDARTL_",
    "_ERAOFCONQUEST_",
    "_FAIRYAWAKEN_",
    "_FARFETCH_",
    "_FOXLEGENDS_",
    "_FXPRO_",
  ];

  const creativesTypeData = ["stat", "prod", "3d", "neu"];

  const orderByData = ['Top to Bottom', 'Left to Right', 'Layer Panel']


  return (
    <div className="main-container default-container">
      <Select
        type="Search"
        label="Offer:"
        placeholder="Search..."
        options={offersData}
      />
      <Input label="Designer&nbsp;color:" placeholder="Sapphire" />
      <Input label="Buyer:" placeholder="AK" />
      <Select
        type="Search"
        label="Creo&nbsp;type:"
        placeholder="Search..."
        options={creativesTypeData}
      />
      <div style={{ display: "flex" }}>
        <Input label="From:" placeholder="1" />
        <Select
          type="Search"
          label="Order&nbsp;by:"
          placeholder="Search..."
          options={orderByData}
        />
      </div>
    </div>
  );
};

export default Default;

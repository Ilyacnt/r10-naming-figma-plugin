import React from "react";
import Input from "../ui/Input";
import { useSelector } from "react-redux";
import {
  setBuyer,
  setDesignerColor,
  setFrom,
  setOffer,
  setOrderBy,
} from "../store/reducerGAActions";
import Select from "../ui/Select";
import Button from "../ui/Button";

const GA = () => {
  const { offer, designerColor, buyer, from, orderBy } = useSelector(
    (state) => state.ga
  );
  const orderByData = ["Top to Bottom", "Left to Right", "Layer Panel"];

  const renameHandle = () => {
    parent.postMessage({ pluginMessage: { type: "ga" } }, "*");
  };

  const cancelHandle = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <div className="main-container">
      <Input
        label="Designer&nbsp;color: "
        placeholder="Sapphire"
        value={designerColor}
        onInput={setDesignerColor}
      />
      <Input
        label="Offer: "
        placeholder="GA"
        value={offer}
        onInput={setOffer}
      />
      <Input
        label="Buyer: "
        placeholder="AK"
        value={buyer}
        onInput={setBuyer}
      />
      <div style={{ display: "flex", gap: "20px" }}>
        <Input
          label="From: "
          placeholder="1"
          value={from}
          onInput={setFrom}
          style={{ width: '150px'}}
        />
        <Select
          type="Search"
          label="Order&nbsp;by:"
          placeholder="Search..."
          options={orderByData}
          onSelect={setOrderBy}
          value={orderBy}
        />
      </div>
      <div className="buttons-container">
        <Button type="secondary" onButton={cancelHandle}>
          Cancel
        </Button>
        <Button type="primary" onButton={renameHandle}>
          Rename
        </Button>
      </div>
    </div>
  );
};

export default GA;

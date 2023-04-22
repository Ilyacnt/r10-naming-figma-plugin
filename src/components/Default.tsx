import React, { useEffect } from "react";
import Select from "../ui/Select";
import Input from "../ui/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchOffers } from "../store/reducerOffersActions";
import {
  setCreoType,
  setDesignerColor,
  setOffer,
  setOrderBy,
} from "../store/reducerDefaultActions";
import { setBuyer } from "../store/reducerDefaultActions";
import { setFrom } from "../store/reducerDefaultActions";
import Button from "../ui/Button";

const Default = () => {
  const { offer, designerColor, buyer, creoType, from, orderBy } = useSelector(
    (state) => state.default
  );
  const offersData = useSelector((state) => state.offers.offers);
  const dispatch = useDispatch();
  const creativesTypeData = ["stat", "prod", "3d", "neu"];
  const orderByData = ["Top to Bottom", "Left to Right", "Layer Panel"];

  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOffers());
    // console.log(state);
    
  }, []);

  const renameHandle = () => {
    parent.postMessage({ pluginMessage: { type: "default" } }, "*");
  }

  const cancelHandle = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }


  return (
    <div className="main-container default-container">
      <Select
        type="Search"
        label="Offer:"
        placeholder="Search..."
        options={offersData}
        onSelect={setOffer}
        value={offer}
      />
      <Input
        label="Designer&nbsp;color:"
        placeholder="Sapphire"
        value={designerColor}
        onInput={setDesignerColor}
      />
      <Input label="Buyer:" placeholder="AK" value={buyer} onInput={setBuyer} />
      <Select
        type="Search"
        label="Creo&nbsp;type:"
        placeholder="Search..."
        options={creativesTypeData}
        onSelect={setCreoType}
        value={creoType}
      />
      <div style={{ display: "flex" }}>
        {/* LOGO HERE */}
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
        <Button type="secondary" onButton={cancelHandle}>Cancel</Button>
        <Button type="primary" onButton={renameHandle}>Rename</Button>
      </div>
    </div>
  );
};

export default Default;

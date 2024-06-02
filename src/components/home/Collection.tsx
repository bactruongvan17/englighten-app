import React, { ReactNode } from "react";
import "./Collection.css";
import { CollectionItem } from "../../types/type";
import CollectionItemComponent from "./CollectionItem";

const CollectionComponent: React.FC<{ data: CollectionItem[] }> = ({
  data,
}) => {
  const listItems: ReactNode = data.map((item) => (
    <CollectionItemComponent key={item.id} data={item} />
  ));

  return <div className="collection">{listItems}</div>;
};

export default CollectionComponent;

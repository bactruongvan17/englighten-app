import { Link } from "react-router-dom";
import { CollectionItem } from "../../types/type";
import "./CollectionItem.css";

const CollectionItemComponent: React.FC<{ data: CollectionItem }> = ({
  data,
}) => {
  return (
    <Link to={`/${data.type}/${data.id}`}>
      <div
        className="collection-item"
        style={{
          backgroundImage: `url(${data.thumb})`,
          backgroundSize: "cover",
        }}
      >
        <span>{data.name}</span>
      </div>
    </Link>
  );
};

export default CollectionItemComponent;

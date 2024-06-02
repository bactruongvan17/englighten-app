import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import { CollectionItem } from "../../types/type";
import CollectionComponent from "../../components/home/Collection";

interface Props
  extends RouteComponentProps<{
    type: string;
    id: string;
  }> {}

const CollectionPage: React.FC<Props> = ({ match }) => {
  const [collection, setCollection] = useState<CollectionItem>({
    id: "1",
    type: "collection",
    name: "The Oxford 3000",
    thumb: "",
  });
  const [data] = useState<CollectionItem[]>([
    {
      id: "1",
      type: "lesson",
      name: "Animal",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBagcssp4TteavgFnWzFBncyobYIf02I17Cg&s",
    },
    {
      id: "2",
      type: "lesson",
      name: "School",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnVpfcqXSZ9zLW-bpCZ6l4vtQiY8xA0lxlg&s",
    },
    {
      id: "3",
      type: "lesson",
      name: "Technology",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSYcEoh-D1aOT_d3b5LoLi2dHpCL3qKOctA&s",
    },
    {
      id: "4",
      type: "lesson",
      name: "Business",
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe76BHWYCHb58-l1AUtdHG76gxNilvgN6Ymw&s",
    },
  ]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{collection.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <CollectionComponent data={data} />
      </IonContent>
    </IonPage>
  );
};

export default CollectionPage;

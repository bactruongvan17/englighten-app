import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./style.css";
import CollectionComponent from "../../components/home/Collection";
import { useState } from "react";
import { CollectionItem } from "../../types/type";

const Home: React.FC = () => {
  const [data] = useState<CollectionItem[]>([
    {
      id: "1",
      type: "collection",
      name: "The Oxford 3000",
      thumb:
        "https://m.media-amazon.com/images/S/pv-target-images/5ea3477b84c288de2eb7239e591cce8f9a98c50e71b75ac7738ab88883e3d6af.jpg",
    },
    {
      id: "2",
      type: "collection",
      name: "English News",
      thumb:
        "https://aten.edu.vn/wp-content/uploads/2023/07/hinh-anh-news-la-danh-tu-dem-duoc-hay-khong-dem-duoc-so-1.jpg",
    },
  ]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Englighten</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <CollectionComponent data={data} />
      </IonContent>
    </IonPage>
  );
};

export default Home;

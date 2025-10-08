import { collection, doc, getDoc, getDocs ,query,where } from "firebase/firestore";
import { db } from "../firebase-config";

export const fetchShopInfo = async (shopId : number ) =>{
    const resultFireQuery = query(
                    collection(db,"shops"),
                    where("key", "==", shopId)
                );

    const snapshot = await getDocs(resultFireQuery);
    console.log("fetchShopInfo");

    if(snapshot.empty) {
        throw new Error("No doc found");
    }

      const firstDoc = snapshot.docs[0];

      return firstDoc.data();

}
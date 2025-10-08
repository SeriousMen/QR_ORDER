import { collection, doc, getDoc, getDocs ,query,where } from "firebase/firestore";
import { db } from "../firebase-config";

export const fetchShopInfo = async (shopId : number ) =>{
    const fireQuery = query(
                    collection(db,"shops"),
                    where("key", "==", shopId)
                );

    const snapshot = await getDocs(fireQuery);
    console.log("fetchShopInfo");

    if(snapshot.empty) {
        throw new Error("No doc found");
    }

      const firstDoc = snapshot.docs[0];
       
      return {id: firstDoc.id, ...firstDoc.data()} as Record<string, any>;;

}


export const fetchShopMenus = async (shopId : number, menuType : String ) =>{

    //query for subcollection in collection shops
    const menusRef = collection(db, "shops",String(shopId),"menus");
    
    const menusQuery = query(menusRef, where("type","==",menuType));

    const snapshot = await getDocs(menusQuery);

    const menus = snapshot.docs.map(doc => doc.data());
    console.log("fetchShopMenus");
    return menus;

}

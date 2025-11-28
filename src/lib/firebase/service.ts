import {collection, getDoc, getDocs, getFirestore, doc} from "firebase/firestore";
import app from "./init";

const firestore  = getFirestore(app);
export async function retrieveData(collectioName: string) {
    const snapshot = await getDocs(collection(firestore, collectioName));

    const data = snapshot.docs.map((doc) =>({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}

export async function retrieveDataById(collectioName:string , id:string) {
    const snapshot = await getDoc(doc(firestore, collectioName, id));
    const data  = snapshot.data();
    return data;
}
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConf";

export const getAllData = async (coll: string = "todos") => {
  const ref = collection(db, coll);
  const documents = await getDocs(ref);
  return documents.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

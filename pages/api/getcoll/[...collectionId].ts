import { db } from "../../../db/firebaseConf";
import { collection, where, getDocs, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query: queryReq } = req;
  const { collectionId } = queryReq;
  let field = collectionId[0] ? collectionId[0] : "";
  let value = collectionId[1] ? collectionId[1] : "";

  console.log("field: ", field, "value: ", value);
  const citiesRef = collection(db, "kota");
  const q = query(citiesRef, where(field, "==", value));
  const response = await getDocs(q);
  const data = response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return res.status(200).json({ ...data });
}

import { db } from "../../../db/firebaseConf";
import { collection, doc, getDocs, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const citiesRef = collection(db, "kota");
  const response = await getDocs(citiesRef);
  const data = response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return res.status(200).json({ ...data });
}

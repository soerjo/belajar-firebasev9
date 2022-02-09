import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db/firebaseConf";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export default async function handleGate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const citiesRef = collection(db, "blesscomn");
  const docref = doc(citiesRef, "youth");
  const colYouth = collection(docref, "youth-barat");

  const response = await getDocs(colYouth);
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return res.status(200).json({ status: 200, data });
}

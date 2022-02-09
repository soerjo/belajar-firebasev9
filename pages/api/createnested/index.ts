import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db/firebaseConf";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

export default async function handleGate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataInput = {
    timestamp: {
      seconds: 1644339600,
      nanoseconds: 0,
    },
    "waktu-ibadah": {
      seconds: 1642784400,
      nanoseconds: 0,
    },
    pria: 20,
    perempuan: 15,
  };

  const colBlesscomn = collection(db, "blesscomn");
  const docref = doc(colBlesscomn, "youth");
  const colsubBless = collection(docref, "youth-barat");
  const docYoutBarat = doc(colsubBless, "januari-m5");

  await setDoc(docYoutBarat, dataInput);
  const response = await getDocs(colsubBless);
  const data = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return res
    .status(200)
    .json({ status: 200, msg: "insert data success!", data });
}

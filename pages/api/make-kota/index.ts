import { db } from "../../../db/firebaseConf";
import { collection, addDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleMake(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = {
    name: "Jakarta",
    state: "Jaksel",
    country: "Indonesia",
    capital: true,
    population: 860000,
    regions: ["west_coast", "norcal"],
  };

  const response = await addDoc(collection(db, "kota"), data);

  return res.status(200).json({
    status: 200,
    msg: "write data Success!",
    data: response,
  });
}

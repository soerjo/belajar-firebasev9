import { db } from "../../../../db/firebaseConf";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handlechange(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  console.log("update id: ", id);
  const citiesRef = doc(db, "kota", `${id}`);
  await updateDoc(citiesRef, {
    state: "Jakbar",
  });

  const response = await getDoc(citiesRef);
  const data = response.data();

  return res.status(200).json({ msg: "succes update data", data: { ...data } });
}

import { db } from "../../../db/firebaseConf";
import { doc, where, getDoc, query } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handlechange(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { indo } = req.query;
  let field = indo[0] ? indo[0] : "";
  let value = indo[1] ? indo[1] : "";

  console.log("field: ", field, "value: ", value);
  const citiesRef = doc(db, "kota", field);
  const response = await getDoc(citiesRef);
  const data = response.data();
  console.log(response);
  //   const q = query(citiesRef, where(field, "==", value));

  return res.status(200).json({ ...data });
}

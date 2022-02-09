import { db } from "../../../../db/firebaseConf";
import { deleteField, doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

//DETELE FILEDS...
export default async function handlechange(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let fields: string[] = [];
  let removeObj = {};
  if (Array.isArray(req.query.fields)) {
    fields = [...req.query.fields];
    removeObj = [...fields].reduce(
      (prev, cur) => ({ ...prev, [cur]: deleteField() }),
      {}
    );
  } else {
    return res.status(400).json({ status: 400, msg: "failed execute!" });
  }
  console.log("update id: ", fields[0], "deleted Fields..: ", fields[1]);
  const citiesRef = doc(db, "kota", `${fields[0]}`);
  await updateDoc(citiesRef, removeObj);

  const response = await getDoc(citiesRef);
  const data = response.data();

  return res.status(200).json({ msg: "succes update data", data: { ...data } });
}

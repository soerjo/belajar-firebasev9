import { NextApiRequest, NextApiResponse } from "next";
import { getAllData } from "../../db/crud";

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getAllData();
  return res.status(200).json({ data: response });
};

export default todos;

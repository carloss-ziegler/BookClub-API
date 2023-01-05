import { connection } from "./connection";

const getAllCards = async () => {
  const [cards] = await connection.query("SELECT * FROM cards");
  return cards;
};

export default { getAllCards };

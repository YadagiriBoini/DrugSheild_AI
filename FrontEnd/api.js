import axios from "axios";

export const checkDrugs = async (drugs) => {

 const res = await axios.post("http://localhost:5000/check", {
  drugs: drugs
 });

 return res.data;
};
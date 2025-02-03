import axios from "axios";

export const getFunFact = async (num: number): Promise<string> => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available.";
  }
};

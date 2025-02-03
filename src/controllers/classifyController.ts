import { Request, Response, NextFunction } from "express";
import { classify } from "../services/classifyService";
import { getFunFact } from "../services/funFactService";

export const classifyNumber = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const num = parseInt(req.query.number as string, 10);
    if (isNaN(num) || !num) {
      res.status(400).json({ number: req.query.number || num, error: true });
      return;
    }

    const classification = classify(num);
    const funFact = await getFunFact(num);
    res.json({ number: num, ...classification, fun_fact: funFact });
  } catch (error) {
    next(error);
  }
};

import { Router } from "express";
const router = Router();

router.get("/comandas", async (req, res) => { 
  res.send("get comandas");
});
router.post("/comanda", async (req, res) => {
  res.send("post comanda");
});

router.put("/comanda", async (req, res) => {
  res.send("put comanda");
});
router.delete("/comanda", async (req, res) => {
  res.send("delete comanda");
});

export default router;

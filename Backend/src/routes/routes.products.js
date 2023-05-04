import { Router } from "express";
const router = Router();

router.get("/products", async (req, res) => {
  res.send("get products");
});
router.post("/product", async (req, res) => {
  res.send("post product");
});

router.put("/product", async (req, res) => {
  res.send("put product");
});
router.delete("/product", async (req, res) => {
  res.send("delete product");
});

export default router;
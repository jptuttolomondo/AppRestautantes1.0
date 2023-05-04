import { Router } from "express";
const router = Router();

router.get("/users", async (req, res) => {
  res.send("get users");
});
router.post("/users", async (req, res) => {
  res.send("post user");
});

router.put("/users", async (req, res) => {
  res.send("put user");
});
router.delete("/users", async (req, res) => {
  res.send("delete user");
});

export default router;
import { Router } from "express";
import UserRouter from "./api/user";

// Init router
const router: Router = Router();

// Add sub-routes
router.use("/user", UserRouter);

// Export the base-router
export default router;

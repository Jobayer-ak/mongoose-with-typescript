import express from 'express';
import { createUser, getAdminUsers, getUser, getUserById } from './user.controller';
const router = express.Router();

/**
 * /
 * /admins
 * /:id dynamic 
 */

router.get('/', getUser);
router.post("/create-user", createUser);
router.get("/admins", getAdminUsers)
router.get("/:id", getUserById);


export default router;

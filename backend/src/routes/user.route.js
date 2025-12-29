import { Router } from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { addAddress, addToWishlist, deleteAddress, getAddresses, getWishlist, removeFromWishlist, updateAddress } from "../controllers/user.controller.js";

const router = Router();

router.use(protectRoute)

// address route endpoint
router.post("/addresses",  addAddress)
router.get("/addresses", getAddresses)
router.put("/addresses/:addressId", updateAddress);
router.delete("/addresses/:addressId", deleteAddress)

//wishlist routes

router.post("/wishlist", addToWishlist);
router.get("/wishlist", getWishlist)
router.delete("/wishlist/:productId", removeFromWishlist)


export default router
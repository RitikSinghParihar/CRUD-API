const express=require("express");
const router=express.Router();



router.post("/", postroute
);



//get users route
router.get("/",getroute
);

//Dyanmic routing
router.get("/:id",dynamicroute);
//Updating user
router.put("/:id",
updateroute
);
    
//Deleting user
router.delete("/:id",deleteroute);

export default router;
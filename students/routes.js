const Router = require("express");
const controller = require("../students/controller");
const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.deleteUser);
router.post("/signup", controller.signup);
module.exports = router;

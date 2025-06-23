const { homepage, createform, createBlog, singleBlog, deleteBlog } = require("../controller/blogController")

const router = require("express").Router()
const { multer, storage } = require('../middleware/multerConfig')
const upload = multer({ storage: storage })

router.get('/', homepage)
router.get('/blog/:id', singleBlog)
router.get('/delete/:id', deleteBlog)
router.route('/create')
    .get(createform)
    .post(upload.single('image'), createBlog)

module.exports = router

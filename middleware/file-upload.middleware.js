var multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, process.cwd() + '/static/assets/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }

});

const upload = multer({storage: storage})


module.exports = upload;
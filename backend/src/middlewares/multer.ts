// configure multer

import multer from 'multer'

const upload = multer()

export const csvUpload = upload.single('csv')

import express from 'express'
import { getUserList } from '../Controllers/userController.js'

const router = express.Router()

router.route('/userlist').get(getUserList)

export default router
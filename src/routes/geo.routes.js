import { Router } from 'express'
import {getGeoloc, getGeolocxid, postGeoloc, putGeoloc, patchGeoloc, deleteGeoloc} from '../controladores/geo.Ctrl.js'
const router=Router()

router.get('/geolocalizacion', getGeoloc) //select
router.get('/geolocalizacion/:id', getGeolocxid) //select x id
router.post('/geolocalizacion', postGeoloc) //insert
router.put('/geolocalizacion/:id', putGeoloc) //update
router.patch('/geolocalizacion/:id', patchGeoloc) //update
router.delete('/geolocalizacion/:id', deleteGeoloc) //delete
export default router 
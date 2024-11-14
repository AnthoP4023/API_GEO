import{conmysql} from '../db.js'

export const getGeoloc=
async (req,res) => {
    try {
        const [result]= await conmysql.query(' select * from Geolocalizacion')
        res.json(result)
    } catch (error) {
        return res.status(500).json({message:"Error  al consultar resultados"})
    }
}

export const getGeolocxid=
async(req, res)=>{
    try {
        const [result]=await conmysql.query('select * from Geolocalizacion where geo_id=?', [req.params.id])
        if(result.length<=0)return res.status(404).json({
            cli_id:0,
            message:"Resultado no encontrado"
        })
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({message:'Error  del lado del servidor'})
    }
}

export const postGeoloc=
async(req, res)=>{
    try {
        const{latitud, longitud, titulo, propietario, cedula, medicion, fecha}=req.body
        
        const [rows]=await conmysql.query('insert into Geolocalizacion (latitud, longitud, titulo, propietario, cedula, medicion, fecha) values(?,?,?,?,?,?,?)',
             [latitud, longitud, titulo, propietario, cedula, medicion, fecha])
             res.json({
                message: "Geolocalización agregada con éxito",
                id: rows.insertId
            })

    } catch (error) {
        return res.status(500).json({message:'error del lado del servidor'})
        
    }
}

export const putGeoloc=
async (req,res)=>{
    try {
        const {id}=req.params
        //console.log(req.body)
        const {latitud, longitud, titulo, propietario, cedula, medicion, fecha}=req.body
        console.log(propietario)
        const [result]=await conmysql.query('update Geolocalizacion set latitud=?, longitud=?, titulo=?, propietario=?, cedula=?, medicion=?, fecha=? where geo_id=?',
            [latitud, longitud, titulo, propietario, cedula, medicion, fecha, id])

        if(result.affectedRows<=0)return res.status(404).json({
            message:'Resultado no encontrado'
        })
        const[rows]=await conmysql.query('select * from Geolocalizacion where geo_id=?',[id])
        res.json({
            message: 'Modificación exitosa',
            updatedRecord: rows[0]  // Se incluye el registro actualizado en la respuesta
          });
    } catch (error) {
        return res.status(500).json({message:'error del lado del servidor'})
    }
}

export const patchGeoloc=
async (req,res)=>{
    try {
        const {id}=req.params
        //console.log(req.body)
        const {latitud, longitud, titulo, propietario, cedula, medicion, fecha}=req.body
        console.log(propietario)
        const [result]=await conmysql.query('update Geolocalizacion set latitud=IFNULL(?, latitud), longitud=IFNULL(?, longitud), titulo=IFNULL(?, titulo) , propietario=IFNULL(?, propietario), cedula=IFNULL(?, cedula), medicion=IFNULL(?, medicion) , fecha=IFNULL(?, fecha) where geo_id=?',
            [latitud, longitud, titulo, propietario, cedula, medicion, fecha, id])

        if(result.affectedRows<=0)return res.status(404).json({
            message:'Resultado no encontrado'
        })
        const[rows]=await conmysql.query('select * from Geolocalizacion where geo_id=?',[id])
        res.json({
            message: 'Cambio realizado correctamente',
            updatedRecord: rows[0]  
          });
        
    } catch (error) {
        return res.status(500).json({message:'error del lado del servidor'})
    }
}

export const deleteGeoloc=
async(req, res)=>{
    try {
        const[rows]=await conmysql.query(' delete from Geolocalizacion where geo_id=?', [req.params.id])
        if(rows.affectedRows<=0)return res.status(404).json({
            id:0,
            message:"No pudo eliminar la geolocalizacion"
        })
        res.status(200).json({
            message: "Geolocalización eliminada correctamente",
            id: req.params.id
          });
    } catch (error) {
        return res.status(500).json({message:"Error al lado del servidor"})
    }
}
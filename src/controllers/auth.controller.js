import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllArchivos = async(req, res)=>{
    try {
        const response = await pool.query('select u.username,a.idarchivo,a.nombre,a.tipo,a.url from archivos a left join usuario as u on a.idusuario =u.idusuario;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delArchivo = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from archivos where idarchivo=$1', [id]);
        return res.status(200).json(
            `Archivo ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const createArchivo = async(req, res)=>{
    try {
        const{ nombre, tipo, url ,idusuario  } = req.body;
        await pool.query('insert into archivos ( nombre,tipo,url,idusuario) values($1,$2,$3,$4)', [ nombre, tipo,url,idusuario]);
        return res.status(200).json(
            `Archivo ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
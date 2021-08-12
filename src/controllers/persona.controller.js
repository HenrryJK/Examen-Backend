import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllPersona = async(req, res)=>{
    try {
        const response = await pool.query('select * from persona');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createPersona = async(req, res)=>{
    try {
        const{ nombre, apellido, telefono   } = req.body;
        await pool.query('INSERT INTO persona ( nombre,apellido,telefono) values($1,$2,$3)', [ nombre, apellido,telefono]);
        return res.status(200).json(
            `Usuario ${ nombre } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const delPersona = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from persona where idpersona=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
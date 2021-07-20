import { response } from 'express'
import {pool} from '../database'
const helpers = require('../libs/helpers');
export const readAllPersonas = async(req , res ) => {
    try {
        const response = await pool.query('select * from persona');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}

export const delPersona = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from persona where idpersona=$1', [id]);
        return res.status(200).json(
        `La persona  ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const createPersona = async(req, res)=>{
    try {
        const{ nombre, apellido , telefono} = req.body;
        await pool.query('insert into persona(nombre, apellido, telefon) values($1,$2, $3)', [nombre, apellido ,telefono]);
        return res.status(200).json(
            `La persona  ${ nombre } ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
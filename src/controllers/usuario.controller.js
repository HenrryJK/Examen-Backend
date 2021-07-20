import { response } from 'express'
import {pool} from '../database'
const helpers = require('../libs/helpers');
export const readAllUsers = async(req , res ) => {
    try {
        const response = await pool.query('select u.idusuario,u.username, p.nombre, p.apellido, a.url from usuario u left join persona as p on u.idpersona = p.idpersona left join archivos as a on a.idusuario = u.idusuario;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }
}

export const readUser = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from usuario where idusuario=$1' ,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const delUser = async (req , res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario=$1', [id]);
        return res.status(200).json(
        `El Usuario ${id} ha sido eliminado correctamente...!`
        );

    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...');
    }

}

export const updateUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ username, password  } = req.body;
        await pool.query('update usuario set username=$1, password=$2  where idusuario=$3', [username ,password, id]);
        return res.status(200).json(
            `El Usuario  ${ id } ha sido modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createUser = async(req, res)=>{
    try {
        const{ username, password , idpersona} = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(username, password, idpersona , estado) values($1,$2, $3,$4, 1)', [username, password2 ,idpersona]);
        return res.status(200).json(
            `El Usuario  ${ username } ha sido creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
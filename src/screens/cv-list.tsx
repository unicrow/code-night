import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { CV } from './cv-add';

const CVList = ()=> {

    const CVs = JSON.parse(window.localStorage.getItem("CVs") || "[]") as CV[]

    return (
        <div>
            <h1>CV Listesi</h1>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell><strong>Ad Soyad</strong></TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {CVs.map((cv, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {cv.fullname}
                        </TableCell>
                        <TableCell align="right">
                            <Link to={"/cv/"+index}>Detay</Link>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default CVList
import React from 'react';
import { useParams } from 'react-router-dom';
import { CV } from './cv-add';

const CVDetail = ()=> {
    const {id} = useParams<{id:string}>()

    const CVs = JSON.parse(window.localStorage.getItem("CVs") || "[]")
    const CV = CVs[id] as CV

    return (
        <div>
            <h1>CV Detayı</h1>
           <div style={{marginTop: 10}}>
               <strong>Ad Soyad: </strong>
               {CV.fullname}
            </div> 

            <div style={{marginTop: 10}}>
               <strong>Yetenekleri: </strong>
               <ul>
               {CV.skills.map((skill, index) => <li key={index}>{skill}</li>)}
               </ul>
            </div>

            <div style={{marginTop: 10}}>
               <strong>Detay: </strong>
               {CV.description}
            </div> 
        </div>
    )
}

export default CVDetail
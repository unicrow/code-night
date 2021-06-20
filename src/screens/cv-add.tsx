import React, { useState } from 'react';
import { Button, Checkbox, TextField } from '@material-ui/core';

type Skill = "JS" | "Python" | "Go" | "HTML"
export interface CV {
    fullname: string;
    skills: string[];
    description: string
}

const skills = [
    "JS",
    "Python",
    "Go",
    "HTML"
]

const defaultCV = {
    fullname: "",
    skills: [],
    description: ""
}

const CVAdd = ()=> {

    const [CV, setCV] = useState<CV>(defaultCV)

    return (
        <div>
            <h1>
                CV Ekle
            </h1>
            <form 
                noValidate 
                autoComplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    var CVs = JSON.parse(window.localStorage.getItem("CVs") || "[]")

                    window.localStorage.setItem( "CVs",
                        JSON.stringify([
                            ...CVs,
                            CV
                        ])
                    )
                    
                    setCV(defaultCV)
                }}
            >
                <div>
                    <TextField 
                        label="Ad Soyad"
                        value={CV.fullname || ""}
                        onChange={(e) => {
                            setCV({
                                ...CV,
                                fullname: e.target.value
                            })
                        }}
                    />
                </div>
                
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <Checkbox
                                checked={CV.skills.indexOf(skill) >= 0}

                                onChange={e => {
                                    if(e.target.checked) {
                                        setCV({
                                            ...CV,
                                            skills: [
                                                ...CV.skills,
                                                skill
                                            ]
                                        })
                                    } else {
                                        setCV({
                                            ...CV,
                                            skills: [
                                                ...CV.skills.filter(_skill => _skill !== skill),
                                            ]
                                        })
                                    }
                                }}
                            />
                            {skill}
                        </li>
                    ))}
                </ul>

                <div>
                    <TextField 
                        label="Detaylar"
                        value={CV.description || ""}
                        multiline
                        onChange={(e) => {
                            setCV({
                                ...CV,
                                description: e.target.value
                            })
                        }}
                    />
                </div>

                <div
                    style={{
                        marginTop: 20
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Kaydet
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CVAdd
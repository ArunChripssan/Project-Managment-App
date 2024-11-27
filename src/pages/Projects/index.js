import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../../api/BaseURL";
import "./index.css";
import CreateProject from "../../components/CreateProject";

const Project = () => {
    const [project, setProject] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const fetchProjects = () => {
        api.get("/projects").then((res) => setProject(res.data));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="project-body">
                <div className="topbar">
                    <div className="title">
                        <h2>Projects</h2>
                    </div>
                    <div className="create-project">
                        <CreateProject/>
                    </div>
                </div>
                <div className="project-card">
                    {project.map((data) => {
                        return (
                            <Card className=" card p-2 m-2" key={data.id}>
                                <Card.Body>
                                    <Card.Title className="card-title">
                                        {data.title}
                                        <div className="card-icons">
                                            <i className="bi bi-pencil-square"></i>
                                            <i className="bi bi-trash3"></i>
                                        </div>
                                    </Card.Title>
                                    {data.description}
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Project;

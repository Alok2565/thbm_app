// src/components/projectContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
    const defaultTitle = "Transfer of Human Biological Material (THBM)";

    // Load from localStorage initially
    const [title, setTitle] = useState(() => {
        return localStorage.getItem("appTitle") || defaultTitle;
    });

    // Save to localStorage on title change
    useEffect(() => {
        localStorage.setItem("appTitle", title);
    }, [title]);

    return (
        <ProjectContext.Provider value={{ title, setTitle }}>
            {children}
        </ProjectContext.Provider>
    );
};

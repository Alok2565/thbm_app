import React from "react";
import { Helmet } from "react-helmet-async";
import { useProject } from "./ProjectContext";

function PageHelmet() {
    const { title } = useProject();

    return (
        <Helmet>
            <title>{title} | Transfer of Human Biological Material (THBM)</title>
            <meta name="description" content={`Page for ${title}`} />
        </Helmet>
    );
}

export default PageHelmet;

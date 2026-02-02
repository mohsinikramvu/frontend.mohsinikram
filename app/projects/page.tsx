"use client"
import HomeLayout from "@/components/home-layout";
import ProjectSection from "@/components/project-section";

const ProjectsPage = () => {
    return (
        <HomeLayout>
            <ProjectSection viewAll={false} />
        </HomeLayout>
    );
};

export default ProjectsPage;

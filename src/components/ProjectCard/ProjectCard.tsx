import './ProjectCard.css'

type ProjectCardProps = {
    projectImage: string;
    projectTitle: string;
    projectDescription: string;
    link: string;
};

function ProjectCard({projectImage, projectTitle, projectDescription, link}: ProjectCardProps) {
    return(
        <article className='article-card'>
            <img src={projectImage} alt="project-image" />
            <div>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <a href={link}>Ir</a>
            </div>
        </article>
    )
}

export default ProjectCard
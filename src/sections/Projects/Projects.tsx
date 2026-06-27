import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import img1 from '../../assets/project-placeholder.webp'

function Projects() {
    return(
        <section className='projects-section container'>
            <h1 id='section-title'>Proyectos</h1>
            <hr />
            <br />
            <ul className='project-list'>
                <li>
                    <ProjectCard 
                    projectImage={img1} 
                    projectTitle='Proyecto1' 
                    projectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis lacus, rhoncus ac neque ut, ultrices volutpat ex. Proin ac auctor turpis. In mollis, eros imperdiet aliquam maximus, quam massa elementum nunc, quis congue lorem augue eget ex. Nam quis eros a elit ullamcorper iaculis eu et ante. Aliquam maximus neque enim, nec dapibus dolor iaculis ut. Aliquam varius purus vel erat fermentum, eu feugiat ex dictum. Nulla fermentum magna vitae nisi cursus, id scelerisque massa volutpat. Proin libero justo, mattis quis dui sed, porta ultrices augue. Ut lobortis, elit non tempus convallis, ipsum enim elementum sapien, eget elementum quam tortor consectetur ex. Nullam gravida diam vel quam vestibulum consequat. Cras in venenatis enim, sed convallis augue. Quisque ultrices metus pretium porttitor convallis. Cras sem felis, viverra id ligula id, tincidunt sodales quam. Quisque lobortis lacinia volutpat. Phasellus eu laoreet sapien. ' 
                    link='#'
                    />
                </li>
            </ul>
        </section>
    )
}

export default Projects
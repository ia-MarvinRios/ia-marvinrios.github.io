import './AboutMyself.css'
import profilePicFront from '../../assets/profilepicture-front.png'
import mailSvg from '../../assets/svg/mail.svg'
import spotifySvg from '../../assets/svg/spotify.svg'
import instagramSvg from '../../assets/svg/instagram.svg'
import githubSvg from '../../assets/svg/github.svg'
import linkedinSvg from '../../assets/svg/linkedin.svg'
import LinkIcon from '../../components/LinkIcon/LinkIcon'
import DownloadIcon from '../../assets/svg/download.svg'
import CV from '../../assets/docs/Currículum-Marvin-Ríos.pdf'


function AboutMyself() {
    return(
        <section className="about-myself container" id="about-myself">
                <div className="about-myself_image">
                    <img src={profilePicFront} alt="Marvin Raydel Rios Aguilar"/>
                </div>
                <div className="about-myself_lore">
                    <h1>Marvin Raydel Ríos Aguilar</h1>
                    <h2>Artista/Desarrollador</h2>
                    <p>Soy un ingeniero de software en formación, especializado en el desarrollo web y de videojuegos. Tengo experiencia en tecnologías del ambiente .Net, React, Wordpress y desarrollo web tradicional. He participado y liderado el desarrollo y diseño de varios proyectos de videojuegos que van desde juegos 3D, 2D, plataformeros, juegos multijugador usando Photon Pun 2, juegos para dispositivos móviles, entre otros.</p>
                    <div className="socials-container">
                        <hr/>
                        <ul className="socials-list">
                            <li>
                                <LinkIcon
                                    href="#"
                                    icon={mailSvg}
                                    clipboardText="ia.marvinrios@gmail.com"
                                />
                            </li>
                            <li><LinkIcon href="https://github.com/ia-MarvinRios" icon={githubSvg}/></li>
                            <li><LinkIcon href="https://www.instagram.com/marvinriosaguilar/" icon={instagramSvg}/></li>
                            <li><LinkIcon href="https://open.spotify.com/intl-es/artist/0YyGnp0TK81dqwjbWlZFxY?si=D75StEpuTWWXixKN8kysBQ" icon={spotifySvg}/></li>
                            <li><LinkIcon href="https://www.linkedin.com/in/marvin-rios-8a7b7b339 " icon={linkedinSvg}/></li>
                            <li><LinkIcon href={CV} icon={DownloadIcon} target='_blank'/></li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default AboutMyself
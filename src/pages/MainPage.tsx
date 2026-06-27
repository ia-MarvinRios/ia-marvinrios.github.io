import Header from '../sections/Header/Header'
import AboutMyself from '../sections/AboutMyself/AboutMyself'
import TechnologiesPanel from '../sections/TechnologiesPanel/TechnologiesPanel'
import Projects from '../sections/Projects/Projects'
import PythonIcon from '../assets/svg/python.svg'
import HTMLIcon from '../assets/svg/html5.svg'
import CSSIcon from '../assets/svg/css.svg'
import JavascriptIcon from '../assets/svg/javascript.svg'
import CSharpIcon from '../assets/svg/csharp.svg'
import UnityIcon from '../assets/svg/unity.svg'

function MainPage() {

  let technologiesIcons: string[] = [
    PythonIcon, HTMLIcon, CSSIcon,
    JavascriptIcon, CSharpIcon, UnityIcon
  ]

  return (
    <>

      <Header/>
      <AboutMyself/>
      <TechnologiesPanel icons={technologiesIcons}/>
      <Projects/>

    </>
  )
}

export default MainPage

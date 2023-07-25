import About from "./about/about"
import Contact from "./contact/contact"
import Decor from "./decor/decor"
import Faq from "./faq/faq"
import Nav from "./nav/nav"
import style from "./total.module.css"

const Total = () => {
    
    return (
        <div className={style.total}>
            <Nav />
           <About />
            <Decor />
            <Faq />
            <Contact /> 
        </div>
    )
}

export default Total
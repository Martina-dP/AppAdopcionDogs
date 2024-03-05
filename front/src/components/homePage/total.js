import About from "./about/about"
import Donations from "./donationsHelps/donations"
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
            <Donations/>
            <Decor />
            <Faq />
            <Contact /> 
        </div>
    )
}

export default Total
import About from "./about/about"
import Contact from "./contact/contact"
import Decor from "./decor/decor"
import Faq from "./faq/faq"
import Nav from "./nav/nav"

const Total = () => {
    
    return (
        <div>
            <Nav />
            <About />
            <Decor />
            <Faq />
            <Contact />
        </div>
    )
}

export default Total
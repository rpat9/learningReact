import Header from './header.jsx'
import Footer from './footer.jsx'

function AboutReact(){

    return (
        <main>
            <h1>Fun facts about React!</h1>
            <ul className ="mainUL">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

function AboutReactPage(){
    return (
        <>
            <Header />
            <AboutReact />
            <Footer />
        </>
        
    )
}

export default AboutReactPage;
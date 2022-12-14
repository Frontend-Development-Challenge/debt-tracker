import "../../assets/styles/Landing.style.css"
import SVGart from "../../assets/images/Ikbal2.png"
import image1 from "../../assets/images/Other01.png"
import image2 from "../../assets/images/Other11.png";
import image3 from "../../assets/images/Other13.png"

const Landing = () => (
    <section className="landing">
        <div className="landing-info">
            <h1>
                Record and Track your<br/>Debts
            </h1>
            <p>
                With DebtTrack you can track and make <br/> records of whoever owes you money
            </p>
        </div>
        <div className="landing-image">
            <img className="SVGart"src={SVGart} alt="art"/>
            <img className="image1" src={image1} alt="image1" />
            <img className="image2" src={image2} alt="image2" />
            <img className="image3" src={image3} alt="image3" />
        </div>        
    </section>
)

export default Landing;
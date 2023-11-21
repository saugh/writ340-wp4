import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image'

export default function Index() {
    const images = [
        "https://images.saymedia-content.com/.image/t_share/MTk5NTAwNDU2NzMxNDIwMjg4/great-dane-coat-and-color-varieties.png",
        "https://i.pinimg.com/originals/48/86/7d/48867dc01bfb923b3b0633e8a0584abe.gif",
        "https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pomeranian_desktop.jpg?h=475&la=en&w=825&hash=70B759DFCDA7304B774B5CE5F62F714F"
    ]
    return (
        <div className="homepage container col-12">
            <div className="home-main row">
                <div className="main-left col-6">
                    <h1>PuppyPrep</h1>
                    <h3>Prepare for dog ownership through our various quizzes!</h3>
                    <Link to={'/Quizzes'}><button type="button" className="btn">Take a Quiz</button></Link>
                </div>
                <img className="col-6" src="https://www.akc.org/wp-content/uploads/2021/09/Finnish-Lapphund-shutterstock_1038964219.jpg" alt="puppy"/>
            </div>
            <div className="home-sub">
                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[0]})` }}>
                            <span><em> The unconditional love that dogs provide makes it tempting to adopt, but we must first understand the responsibilities of being a dog owner. </em></span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[1]})` }}>
                            <span><em>Getting a puppy is a lifetime commitment, not a temporary solution to our loneliness or boredom. </em></span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[2]})` }}>
                            <span><em>Once we adopt a dog, they see us as family, and it is important that we do the same. </em></span>
                        </div>
                    </div>
                </Slide>
                {/* <div className="container">
                    <img src="https://images.saymedia-content.com/.image/t_share/MTk5NTAwNDU2NzMxNDIwMjg4/great-dane-coat-and-color-varieties.png" alt="great danes"/>
                    <h2 className="homepage-text"><em>Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Integer quis auctor elit sed. </em></h2>
                </div>
                <div className="container">
                    <img src="https://i.pinimg.com/originals/48/86/7d/48867dc01bfb923b3b0633e8a0584abe.gif" alt="golden retriever gif"/>
                    <h2 className="homepage-text"><em>Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Vulputate mi sit amet mauris commodo quis imperdiet. In hac habitasse platea dictumst.</em></h2>
                </div>
                <div className="container">
                    <img src="https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_pomeranian_desktop.jpg?h=475&la=en&w=825&hash=70B759DFCDA7304B774B5CE5F62F714F" alt="pomeranian"/>
                    <h2 className="homepage-text"><em>At in tellus integer feugiat scelerisque varius morbi. Amet nisl suscipit adipiscing bibendum est ultricies integer. In eu mi bibendum neque egestas congue quisque egestas diam. Magna ac placerat vestibulum lectus.</em></h2>
                </div> */}
            </div>
        </div>
    )
}
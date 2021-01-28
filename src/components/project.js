import React, {useState, useEffect} from "react"
// import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Hive from "../images/hive.png"
import Aquapod from "../images/aquapod.png"
import Microsoft from "../images/microsoft.png"
import Nomi from "../images/nomi.png"
import Cp from "../images/cp.png"
import Adobe from "../images/adobe.png"
import StreamBuddies from "../images/streambuddies.png"
import MusicParty from "../images/musicparty.png"
import ShoppingCart from "../images/shoppingcart.png"
import SWE from "../images/swe.png"
import FounderSecurities from "../images/foundersecurities.png"
import Momentum from "../images/momentum.png"
import ThetaTau from "../images/tt.png"

const Project = () => {
    const [all, setAll] = useState(true);
    const [tech, setTech] = useState(false);
    const [strategy, setStrategy] = useState(false);
    const [leadership, setLeadership] = useState(false);

    const clickedAll=()=>{
        console.log("all clicked")
        setAll(true)
        setTech(false)
        setStrategy(false)
        setLeadership(false)
    }

    const clickedTech=()=>{
        console.log("project clicked")
        setTech(true)
        setAll(false)
        setStrategy(false)
        setLeadership(false)
    }

    const clickedStrategy=()=>{
        console.log("strategy clicked")
        setStrategy(true)
        setAll(false)
        setTech(false)
        setLeadership(false)
    }

    const clickedLeadership=()=>{
        console.log("LeadersclickedLeadership clicked")
        setLeadership(true)
        setAll(false)
        setTech(false)
        setStrategy(false)
    }

    let AOS;

    useEffect(() => {
        /**
         * Server-side rendering does not provide the 'document' object
         * therefore this import is required either in useEffect or componentDidMount as they
         * are exclusively executed on a client
         */
        const AOS = require("aos");
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        if (AOS) {
            AOS.refresh();
        }
    });

    return (
        <div id="project">
            <div className="projectHeader" id="anchorTest">
                <div className="navButton " onClick={clickedAll} style={(!all) ? null : { width: "90px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px"}}>ALL</div>
                <div className="navButton" onClick={clickedTech} style={(!tech) ? null : { width: "120px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px"}}>TECH</div>
                <div className="navButton" onClick={clickedStrategy} style={(!strategy) ? null : { width: "180px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px"}}>STRATEGY</div>
                <div className="navButton" onClick={clickedLeadership} style={(!leadership) ? null : { width: "220px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px"}}>LEADERSHIP</div>
            </div>
            {(all || strategy) && (
                <>
                <div className="lbrown"></div>
                <div className="purpleCircle"></div>
                </>
            )}
            <div className="block">
                {(all || strategy || leadership) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <img className="project-img" src={Hive} alt="Hive Image"></img>
                        <div className="cream-box">
                            <div className="title">HIVE - CONSULTANT TEAM LEAD</div>
                            <div className="description">Identify computer vision use cases and conduct 10+ competitor analysis, report to the President</div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (
                    <div className="column" data-aos="fade-up"  data-aos-anchor="#anchorTest">
                        <img className="project-img" src={Cp} alt="Cp Image" ></img>
                        <div className="cream-box">
                            <div className="title">CS170 Discrete Methods - COURSE PRODUCER</div>
                            <div className="description">Hold weekly office hours for 30+ students to explain difficult concepts and grade exams</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={Aquapod} alt="Aquapod Image"></img>
                        <div className="cream-box">
                            <div className="title">AQUAPOD - BUSINESS PROJECT</div>
                            <div className="description">Derive business plan and prototype for self-driving boats to improve sustainability</div>
                        </div>
                    </div>
                )}
            
                { (all || tech )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={Microsoft} alt="Microsoft Image"></img>
                        <div className="cream-box">
                            <div className="title">MICROSOFT AZURE - EXPLORE INTERN</div>
                            <div className="description">Develop Rasperry Pi demo for open-source project Krustlet (Kubernetes & WASM)</div>
                        </div>
                    </div>
                )}

                { (all || tech || strategy)&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={Nomi} alt="Nomi Image"></img>
                        <div className="cream-box">
                            <div className="title">NOMI - PM & DEVELOPER</div>
                            <div className="description">Build digital menu software start-up that help customers to dine confidently</div>
                        </div>
                    </div>
                )}

               

                {(all || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={Adobe} alt="Adobe Image"></img>
                        <div className="cream-box">
                            <div className="title">ADOBE - CONSULTANT</div>
                            <div className="description">Provide discounted Adobe Creative Cloud suite for USC students</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={StreamBuddies} alt="StreamBuddies Image"></img>
                        <div className="cream-box">
                            <div className="title">STREAMBUDDIES - BUSINESS PLAN</div>
                            <div className="description">Design prototype and devise business pitch to allow people to watch their favorites together </div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={MusicParty} alt="MusicParty Image"></img>
                        <div className="cream-box">
                            <div className="title">MUSIC PARTY - GROUP CODING PROJECT</div>
                            <div className="description">Find songs that everyone love in a group hangout by adding and upvoting songs</div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={ShoppingCart} alt="ShoppingCart Image"></img>
                        <div className="cream-box">
                            <div className="title">SHOPPING CART - SOLO CODING PROJECT</div>
                            <div className="description">Recipe-based web app that allow users to add and remove ingredients to the shopping cart</div>
                        </div>
                    </div>
                )}

                { (all || leadership )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={SWE} alt="SWE Image"></img>
                        <div className="cream-box">
                            <div className="title">SWE - COMMUNITY OUTREACH OFFICER</div>
                            <div className="description">Host events to introduce highschoolers to STEM and fundraise $2,000 for shelters </div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (    
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={FounderSecurities} alt="FounderSecurities Image"></img>
                        <div className="cream-box">
                            <div className="title">FOUNDER SECURITIES - QUANT INTERN</div>
                            <div className="description">Analyze patterns in published government data, develop, and test trading algorithms</div>
                        </div>
                    </div>
                )}

                { (all || strategy )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={Momentum} alt="Momentum Image"></img>
                        <div className="cream-box">
                            <div className="title">MOMENTUM - CONSULTANT</div>
                            <div className="description">Collect feedback from user interviews and design animated ad campaigns</div>
                        </div>
                    </div>
                )}

                { (all || leadership )&& (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={ThetaTau} alt="ThetaTau Image"></img>
                        <div className="cream-box">
                            <div className="title">THETA TAU - SCRIBE, EXECUTIVE BOARD</div>
                            <div className="description">Raised $11,000 for BLM, correspond with 60 current & 130 potential members</div>
                        </div>
                    </div>
                )}

                <div className="column"></div>
                <div className="column"></div>

            </div>
            
            <div className="contact">
           
                Get in touch👋 HMU on Twitter or shoot me an email👉
                <div className="copyright">Amanda Wang &copy; 2021</div>
            </div>
            <div className="brownShadow"></div>
        </div>
        
    )
    
}
export default Project
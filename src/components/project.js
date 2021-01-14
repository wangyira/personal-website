import React, {useState} from "react"

import Hive from "../images/hive.png"
import Aquapod from "../images/aquapod.png"
import Microsoft from "../images/microsoft.png"
import Nomi from "../images/nomi.png"
import Adobe from "../images/adobe.png"
import StreamBuddies from "../images/streambuddies.png"
import MusicParty from "../images/musicparty.png"
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

    return (
        <div id="project">
            <div className="projectHeader">
                <div className="navButton" onClick={clickedAll}>ALL</div>
                <div className="navButton" onClick={clickedTech}>TECH</div>
                <div className="navButton" onClick={clickedStrategy}>STRATEGY</div>
                <div className="navButton" onClick={clickedLeadership}>LEADERSHIP</div>
            </div>

            <div className="block">
                {(all || strategy) && (
                    <div className="column left">
                        <img className="project-img" src={Hive} alt="Hive Image"></img>
                        <div className="cream-box">
                            <div className="title">HIVE - CONSULTANT TEAM LEAD</div>
                            <div className="description">Identify computer vision use cases and conduct 10+ competitor analysis</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column right">
                        <img className="project-img" src={Aquapod} alt="Aquapod Image"></img>
                        <div className="cream-box">
                            <div className="title">AQUAPOD - BUSINESS PROJECT</div>
                            <div className="description">Derive business plan for self-driving boats to improve sustainability</div>
                        </div>
                    </div>
                )}
            
                { (all || tech )&& (
                    <div className="column left">
                        <img className="project-img" src={Microsoft} alt="Microsoft Image"></img>
                        <div className="cream-box">
                            <div className="title">MICROSOFT AZURE - EXPLORE INTERN</div>
                            <div className="description">Rasperry Pi demo for open-source project Krustlet (Kubernetes & WASM)</div>
                        </div>
                    </div>
                )}

                { (all || tech || strategy)&& (
                    <div className="column right">
                        <img className="project-img" src={Nomi} alt="Nomi Image"></img>
                        <div className="cream-box">
                            <div className="title">NOMI - PM & DEVELOPER</div>
                            <div className="description">Digital menu software start-up that help customers to dine confidently</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column left">
                        <img className="project-img" src={Adobe} alt="Adobe Image"></img>
                        <div className="cream-box">
                            <div className="title">ADOBE - CONSULTANT</div>
                            <div className="description">Provide discounted Adobe Creative Cloud suite for USC students</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column right">
                        <img className="project-img" src={StreamBuddies} alt="StreamBuddies Image"></img>
                        <div className="cream-box">
                            <div className="title">STREAMBUDDIES - BUSINESS Plan</div>
                            <div className="description">Design prototype and devise business pitch to watch people’s favorites together </div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (
                    <div className="column left">
                        <img className="project-img" src={MusicParty} alt="MusicParty Image"></img>
                        <div className="cream-box">
                            <div className="title">MUSIC PARTY - GROUP CODING PROJECT</div>
                            <div className="description">Users can add, upvote, and listen to their favorite songs</div>
                        </div>
                    </div>
                )}

                { (all || leadership )&& (
                    <div className="column right">
                        <img className="project-img" src={SWE} alt="SWE Image"></img>
                        <div className="cream-box">
                            <div className="title">SWE - Community Outreach Officer</div>
                            <div className="description">Host events to introduce highschoolers to STEM and fundraise $2,000 for shelters </div>
                        </div>
                    </div>
                )}

                { (all || tech )&& (    
                    <div className="column left">
                        <img className="project-img" src={FounderSecurities} alt="FounderSecurities Image"></img>
                        <div className="cream-box">
                            <div className="title">FOUNDER SECURITIES - QUANT INTERN</div>
                            <div className="description">Find patterns in published data and develop trading algorithms</div>
                        </div>
                    </div>
                )}

                { (all || strategy )&& (
                    <div className="column right">
                        <img className="project-img" src={Momentum} alt="Momentum Image"></img>
                        <div className="cream-box">
                            <div className="title">MOMENTUM - CONSULTANT</div>
                            <div className="description">Collect feedback from user interviews and design animated ad campaigns</div>
                        </div>
                    </div>
                )}

                { (all || leadership )&& (
                    <div className="column left">
                        <img className="project-img" src={ThetaTau} alt="ThetaTau Image"></img>
                        <div className="cream-box">
                            <div className="title">Theta Tau - Executive board</div>
                            <div className="description">Raised $11,000 for BLM, communicate with 60 current & 130 potential members</div>
                        </div>
                    </div>
                )}

                <div className="column"></div>
                <div className="column"></div>

            </div>
            
            <div className="contact">
           
                Get in touch👋 HMU on Twitter or shoot me an email👉
            </div>
            <div className="brownShadow"></div>
        </div>
        
    )
    
}
export default Project
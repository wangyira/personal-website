import React, { useState, useEffect } from "react"
import 'aos/dist/aos.css';

import Aks from "../images/aks.png"
import Asset from "../images/asset.png"
import KeepFit from "../images/keepfit.png"
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
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const Project = () => {
    const [all, setAll] = useState(true);
    const [tech, setTech] = useState(false);
    const [strategy, setStrategy] = useState(false);
    const [leadership, setLeadership] = useState(false);

    const clickedAll = (e) => {
        console.log("all clicked")
        setAll(true)
        setTech(false)
        setStrategy(false)
        setLeadership(false)
        e.preventDefault()
        trackCustomEvent({
            category: "All Button",
            action: "Click",
            label: "all button clicked"
        })
    }

    const clickedTech = (e) => {
        console.log("project clicked")
        setTech(true)
        setAll(false)
        setStrategy(false)
        setLeadership(false)
        e.preventDefault()
        trackCustomEvent({
            category: "Tech Button",
            action: "Click",
            label: "tech button clicked"
        })
    }

    const clickedStrategy = (e) => {
        console.log("strategy clicked")
        setStrategy(true)
        setAll(false)
        setTech(false)
        setLeadership(false)
        e.preventDefault()
        trackCustomEvent({
            category: "Strategy Button",
            action: "Click",
            label: "strategy button clicked"
        })
    }

    const clickedLeadership = (e) => {
        console.log("LeadersclickedLeadership clicked")
        setLeadership(true)
        setAll(false)
        setTech(false)
        setStrategy(false)
        trackCustomEvent({
            category: "Leadership Button",
            action: "Click",
            label: "leadership button clicked"
        })
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
            once: false,
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
                <div className="navButton " onClick={clickedAll} style={(!all) ? null : { width: "90px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px" }}>ALL</div>
                <div className="navButton" onClick={clickedTech} style={(!tech) ? null : { width: "120px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px" }}>TECH</div>
                <div className="navButton" onClick={clickedStrategy} style={(!strategy) ? null : { width: "180px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px" }}>STRATEGY</div>
                <div className="navButton" onClick={clickedLeadership} style={(!leadership) ? null : { width: "220px", background: "rgba(220, 180, 173, 0.7)", border: "3px solid #c77d61", borderRadius: "40px" }}>LEADERSHIP</div>
            </div>
            {(all || tech || strategy) && (
                <>
                    <div className="lbrown"></div>
                    <div className="purpleCircle"></div>
                </>
            )}
            <div className="block">

                {(all || tech || strategy) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <a href="https://azure.microsoft.com/en-us/services/kubernetes-service/" target="_blank">
                            <img className="project-img" src={Aks} alt="Aks Image"></img>
                            <div className="cream-box">
                                <div className="title">MICROSOFT - PM INTERN</div>
                                <div className="description">Lead a project integration from planning to release on Azure Kubernetes Service.</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <a href="https://github.com/KnowledgeCaptureAndDiscovery/ASSET" target="_blank">
                            <img className="project-img" src={Asset} alt="Asset Image"></img>
                            <div className="cream-box">
                                <div className="title">ASSET - CURVE RESEARCH FELLOW</div>
                                <div className="description">Independently coded features for a sketching interface for scientists, launched v2.0.</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <a href="https://github.com/wangyira/KeepFit/" target="_blank">
                            <img className="project-img" src={KeepFit} alt="Keepfit Image"></img>
                            <div className="cream-box">
                                <div className="title">KEEPFIT - ANDROID GROUP PROJECT</div>
                                <div className="description">Developed a fitness app that allows user to upload videos, track calories, and plan workouts.</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || strategy || leadership) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <a href="https://thehive.ai/" target="_blank">
                            <img className="project-img" src={Hive} alt="Hive Image"></img>
                            <div className="cream-box">
                                <div className="title">HIVE - CONSULTANT TEAM LEAD</div>
                                <div className="description">Identified computer vision use cases and did 10+ competitor analysis, report to the President</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up" data-aos-anchor="#anchorTest">
                        <img className="project-img" src={Cp} alt="Cp Image" ></img>
                        <div className="cream-box">
                            <div className="title">DISCRETE METHODS - COURSE PRODUCER</div>
                            <div className="description">Hold weekly office hours for 30+ students to explain difficult concepts and grade exams</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://docs.google.com/presentation/d/1ugVh4YT6hZHv3ikYOOon_LtotZjVBsT9/edit#slide=id.p31" target="_blank">
                            <img className="project-img" src={Aquapod} alt="Aquapod Image"></img>
                            <div className="cream-box">
                                <div className="title">AQUAPOD - BUSINESS PROJECT</div>
                                <div className="description">Derive business plan and prototype for self-driving boats to improve sustainability</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://krustlet.dev/" target="_blank">
                            <img className="project-img" src={Microsoft} alt="Microsoft Image"></img>
                            <div className="cream-box">
                                <div className="title">MICROSOFT AZURE - EXPLORE INTERN</div>
                                <div className="description">Develop Rasperry Pi demo for open-source project Krustlet (Kubernetes & WASM)</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://www.dinewithnomi.com/" target="_blank">
                            <img className="project-img" src={Nomi} alt="Nomi Image"></img>
                            <div className="cream-box">
                                <div className="title">NOMI - PM & DEVELOPER</div>
                                <div className="description">Build digital menu software start-up that help customers to dine confidently</div>
                            </div>
                        </a>
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
                        <a href="https://www.figma.com/proto/qxXH0WEuk5R8W7kKwUY31n/Stream-Buddies?node-id=13%3A0&scaling=min-zoom" target="_about">
                            <img className="project-img" src={StreamBuddies} alt="StreamBuddies Image"></img>
                            <div className="cream-box">
                                <div className="title">STREAMBUDDIES - BUSINESS PLAN</div>
                                <div className="description">Design prototype and devise business pitch to allow people to watch their favorites together </div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://github.com/wangyira/CSCI201_Music_Party" target="_blank">
                            <img className="project-img" src={MusicParty} alt="MusicParty Image"></img>
                            <div className="cream-box">
                                <div className="title">MUSIC PARTY - GROUP CODING PROJECT</div>
                                <div className="description">Find songs that everyone love in a group hangout by adding and upvoting songs</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://github.com/wangyira/shopping-cart" target="_blank">
                            <img className="project-img" src={ShoppingCart} alt="ShoppingCart Image"></img>
                            <div className="cream-box">
                                <div className="title">SHOPPING CART - SOLO CODING PROJECT</div>
                                <div className="description">Recipe-based web app that allow users to add and remove ingredients to the shopping cart</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || leadership) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://ignite.usc.edu/project/23257" target="_blank">
                            <img className="project-img" src={SWE} alt="SWE Image"></img>
                            <div className="cream-box">
                                <div className="title">SWE - COMMUNITY OUTREACH OFFICER</div>
                                <div className="description">Host events to introduce highschoolers to STEM and fundraise $2,000 for shelters </div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || tech) && (
                    <div className="column" data-aos="fade-up">
                        <img className="project-img" src={FounderSecurities} alt="FounderSecurities Image"></img>
                        <div className="cream-box">
                            <div className="title">FOUNDER SECURITIES - QUANT INTERN</div>
                            <div className="description">Analyze patterns in published government data, develop, and test trading algorithms</div>
                        </div>
                    </div>
                )}

                {(all || strategy) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://givemomentum.com/" target="_blank">
                            <img className="project-img" src={Momentum} alt="Momentum Image"></img>
                            <div className="cream-box">
                                <div className="title">MOMENTUM - CONSULTANT</div>
                                <div className="description">Collect feedback from user interviews and design animated ad campaigns</div>
                            </div>
                        </a>
                    </div>
                )}

                {(all || leadership) && (
                    <div className="column" data-aos="fade-up">
                        <a href="https://viterbischool.usc.edu/news/2020/07/usc-viterbi-engineering-society-raises-money-for-black-lives-matter/" target="_blank">
                            <img className="project-img" src={ThetaTau} alt="ThetaTau Image"></img>
                            <div className="cream-box">
                                <div className="title">THETA TAU - SCRIBE (EXECUTIVE BOARD)</div>
                                <div className="description">Raised $11,000 for BLM, correspond with 60 current & 130 potential members</div>
                            </div>
                        </a>
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
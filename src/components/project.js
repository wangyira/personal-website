import React from "react"

import Hive from "../images/hive.png"
import Aquapod from "../images/Aquapod.png"

const Project = () => {
    return (
        <div className="project">
            
            <div className="row">
                <div className="column left">
                    <img className="project-img" src={Hive} alt="Hive Image"></img>
                    <div className="cream-box">
                        <div className="title">HIVE - CONSULTANT TEAM LEAD</div>
                        <div className="description">Identify computer vision use cases and conduct 10+ competitor analysis</div>
                    </div>
                </div>

                <div className="column right">
                    <img className="project-img" src={Aquapod} alt="Hive Image"></img>
                    <div className="cream-box">
                        <div className="title">AQUAPOD - BUSINESS PROJECT</div>
                        <div className="description">Derive business plan for self-driving boats to improve sustainability</div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column left">
                    <img className="project-img" src={Hive} alt="Hive Image"></img>
                    <div className="cream-box">
                        <div className="title">HIVE - CONSULTANT TEAM LEAD</div>
                        <div className="description">Identify computer vision use cases and conduct 10+ competitor analysis</div>
                    </div>
                </div>

                <div className="column right">
                    <img className="project-img" src={Aquapod} alt="Hive Image"></img>
                    <div className="cream-box">
                        <div className="title">AQUAPOD - BUSINESS PROJECT</div>
                        <div className="description">Derive business plan for self-driving boats to improve sustainability</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default Project
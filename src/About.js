import React from "react";
import Devpro from "./components/devprofile";
import chinu from "../src/images/chinu.jpeg";
import self from "../src/images/self.png";

const About = () => {
    return (
        <>
            <div className="divyu">
                <Devpro
                    name="Smruti Prakash Rout"
                    des="Developer"
                    pic={self}
                    className="uil uil-laptop-cloud"
                    discription="Hey there, My self Smruti ..!
                    nice to meet you.
                    Let's connect."
                />
                <Devpro
                    name="Chinmaya dash"
                    des="Presenter"
                    pic={chinu}
                    className="uil uil-document-layout-right"
                    discription="Hey there, My self Chinmaya ..!
                    nice to meet you.
                    Let's connect."


                />
            </div>
        </>
    )
}

export default About;
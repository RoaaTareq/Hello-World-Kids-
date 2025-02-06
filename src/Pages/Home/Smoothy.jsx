import React from "react";
import Heading from "../../Components/Heading";
import SmoothyImg from '../../assest/R&G.49187848 (1).png'
import Button from '../../Components/Button'
const Smoothy = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Heading level={1} className="smoothy-title">
                            The 1st Text-Based Programming Language for Kids
                        </Heading>
                        <p className="main-text">
                            SmoothY™ is a fun and unique text-based programming language developed by HelloWorldKids Company in 2019 and was launched in 2020 for young learners. It's a user-friendly platform that introduces kids to the
                            world of coding in a simple and engaging way. SmoothY™ acts as a perfect starting point for children to understand basic coding concepts before advancing to more complex languages like Python. This language not
                            only makes coding accessible and enjoyable for kids but also lays a solid foundation for their future in technology
                        </p>
                    </div>
                    <div className="col-4  d-flex flex-column">
                        <img src={SmoothyImg} alt="Smoothy" className="smoothy-img" />
                        <Button label="Try Smoothy Now" className="try-btn"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Smoothy;

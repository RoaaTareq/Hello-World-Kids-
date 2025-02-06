import React from "react";
import Heading from "../../Components/Heading";
import Button from "../../Components/Button";
import Student from "../../assest/TC-2.2f5e35cb.png";
import "./CSS/Home.css";
const TopSection = () => {
    return (
        <section className="top-section">
            <div className="container">
                <div className="row align-items-center  justify-content-between">
                    <div className="col-8">
                        <Heading level={1} className="main-title">
                            Discover
                        </Heading>
                        <p className="main-text">
                            Since 2015, HelloWorldKids has been revolutionizing tech education for young minds in the MENA region through our innovative and accessible learning curriculum. HelloCode platform stands as the largest for young
                            learners, functioning as the Develop phase where curiosity flourishes, and foundational skills are established. Smart talents Discover initiates the next phase, leading students through assessments and
                            certifications to unlock their unique talents. Lastly, the Connect phase launches them into the Hello Partners Network (HPN), a global network of partners and alumni, fostering future leaders.
                        </p>
                        <Button label="Read More" className="btn-more" />
                    </div>
                    <div className="col-4">
                        <img src={Student} alt="Student" className="img-student" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;

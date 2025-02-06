import React from 'react'
import Certificates from '../../assest/Cetificate.b223139f.png'
import Heading from '../../Components/Heading'
const Certificate=()=>{
    return(
        <section>
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-6">
                        <Heading level={1} className="smoothy-title">Get Certified</Heading>
                        <p  className="main-text">
                        Hello World Kids opens doors for young learners to earn globally recognized coding certifications through the groundbreaking HelloWorldKids Certification Program (HCP). In collaboration with Prometric's extensive network of 8,000+ exam centers, Hello World Kids provides reliable and accessible certifications. Enroll online, master skills, and earn specialized certificates for each course, HelloSmoothY Certificate, HelloWeb Certificate, and HelloPython Certificate.  Excel in all areas to unlock the prestigious HelloMaster title, offering exclusive benefits, career advantages, and recognition as a programming master – all from your home or school.
                        </p>
                    </div>
                    <div className="col-6">
                        <img src={Certificates} alt="Certificates" className='cert-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  Certificate
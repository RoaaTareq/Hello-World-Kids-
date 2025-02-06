import React from 'react'
import CommunityImage from '../../assest/com.be0393a5.png'
import Heading from '../../Components/Heading'
const Community=()=>{
    return(
        <section>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-6">
                        <img src={CommunityImage} alt="Community" className='commu-img' />
                    </div>
                    
                    <div className="col-6">
                        <Heading level={1} className="smoothy-title">HelloCode Community </Heading>
                        <p  className="main-text">
                        HelloCode Community is an exclusive space designed for young programmers to come together and thrive! At HelloCode, we've created this community with a specific purpose in mind – to foster a collaborative environment where young learners can not only delve into the world of coding but also actively contribute to a vibrant team. The HelloCode Community is specifically crafted to nurture the curiosity of young programmers. It's a space where curiosity meets teamwork, transforming the coding journey into an exhilarating adventure. By joining us, your child becomes an active participant in a community that values not only individual growth but also the joy of coding, sharing knowledge, and celebrating achievements together.
                        </p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}
export default  Community
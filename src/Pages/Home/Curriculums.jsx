import React from 'react'
import Curriculum from '../../assest/Books.51e51798.png'
import Heading from '../../Components/Heading'
const Curriculums=()=>{
    return(
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src={Curriculum} alt="Curriculum" className='curr-img' />
                    </div>
                    <div className="col-6">
                        <Heading level={1} className="smoothy-title">We Customize Curriculums</Heading>
                        <p  className="main-text">
                        At Hello World Kids, we're dedicated to crafting 
                        specialized curriculums that meet the unique needs of governments, 
                        and organizations. Our focus is on developing programming and technology curriculums
                         that are relevant and effective for various educational and technological groups, 
                         including those involved in tender processes. 
                          Our goal is to offer education that appeals to a broad range of users and decision-makers, 
                        ensuring they align with the diverse requirements of our clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  Curriculums
import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
    return (
        <>
            <Header />
            <Steps />
            <BgSlider />
            <Testimonials />
            <Upload />
        </>
    )
}

export default Home
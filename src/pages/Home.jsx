import React from 'react'
import HomeNav from '../components/HomeNav'
import logo from '../assets/logo.svg'
import LandingComponent from '../components/LandingComponent'
import Content from '../components/Content'

const Home = () => {
    const sections = [{ title: 'About', path: '/about' }, { title: 'How It Works', path: '/howItWorks' }, { title: 'Pricing', path: '/pricing' }]
    return (
        <>
            <HomeNav logo={logo} sections={sections} btnText="Login / Signup" />
            <LandingComponent />
            <Content />
        </>
    )
}

export default Home

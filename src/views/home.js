import React, { useContext } from 'react';
import { Context } from './../store/appContext';
import Signup from './Signup';
import Navbar from './../components/Navbar'

const Home = props => {
    const {store, actions} = useContext(Context);
    return (
        <>
        <Navbar />
        </>
    )
}

export default Home;
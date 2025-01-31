import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            {/*Navbar */}
            <Navbar /><br />
            {/* Jumbotron */}
            <Jumbotron /><br />
            {/* Card */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Card titulo="Card title"/>
                        </div>
                        <div className="col-md-3">
                            <Card titulo="Card title"/>
                        </div>
                        <div className="col-md-3">
                            <Card titulo="Card title"/>
                        </div>
                        <div className="col-md-3">
                            <Card titulo="Card title"/>
                        </div>
                    </div>

                </div>
            </section><br />
            {/* Footer */}
            <Footer/>
        </>
    )
}

export default App
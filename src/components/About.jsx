import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        DesignX helps manufacturing companies to create next-generation shopfloor. Our product DFOS™  (Digital Factory Operating System) is a powerful combination of iBPM, RPA, IIOT & AI. It solves the complexity of legacy systems like ERP, SCADA, MES & saves a huge pile of money spent on constant incremental changes required in these systems. DFOS™ enables the decision-makers with live business updates on production, rejection, loss prediction & MTTA™ (Mean Time to Act) for a specific problem.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://designx.in/wp-content/uploads/2021/02/Untitled-design-85.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

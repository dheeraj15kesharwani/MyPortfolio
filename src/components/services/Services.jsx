import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 1 year of experience. Providing quality
                            services to clients and companies.
                        </p>
                        <ul className="services__modal__services grid">
                            <li className="services__modal-services">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">User-Centered Design Focused.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Balances user needs with business goals effectively.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Improves User Flow Efficiency.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Data-Driven Design Decisions.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Collaborates closely with cross-functional teams.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services__button">View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 1 year of experience. Providing quality
                            services to clients and companies.
                        </p>
                        <ul className="services__modal__services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">develop the user interface.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">web page development.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create ux element interactions.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>

                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Design the mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br /> Designer</h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content"> {/* Corrected from services__model-content */}
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 1 year of experience. Providing quality
                            services to clients and companies.
                        </p>
                        <ul className="services__modal__services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I design cohesive brand identities and assets.</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create visually appealing, engaging designs.</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Improves User Flow Efficiency.</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Enhances Visual Consistency.</p>
                            </li>
                            <li className="services__modal-services">
                                <i class="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I craft consistent, memorable visual content.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Services
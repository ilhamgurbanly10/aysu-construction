import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import Images from "../files/Images";
import SimpleCarousel from "../sliders/SimpleCarousel";
import { Collapse } from 'antd';
import React from 'react';
import { logo } from '../files/Images';

export const SocialMediaButtons = () => {

    return (
        <ul className="social-media-buttons-list list-unstyled m-0 d-flex justify-content-start align-items-center">

            <li className="social-media-buttons-item me-4">
                <Link to="/" className="social-media-buttons-btn btn-rotate white-iconic-btn">
                    <i className="social-media-buttons-icon fa fa-twitter"></i>
                </Link>
            </li>

            <li className="social-media-buttons-item me-4">
                <Link to="/" className="social-media-buttons-btn btn-rotate white-iconic-btn">
                    <i className="social-media-buttons-icon fa fa-facebook"></i>
                </Link>
            </li>

            <li className="social-media-buttons-item me-4">
                <Link to="/" className="social-media-buttons-btn btn-rotate white-iconic-btn">
                    <i className="social-media-buttons-icon fa fa-google"></i>
                </Link>
            </li>

            <li className="social-media-buttons-item me-4">
                <Link to="/" className="social-media-buttons-btn btn-rotate white-iconic-btn">
                    <i className="social-media-buttons-icon fa fa-pinterest"></i>
                </Link>
            </li>

            <li className="social-media-buttons-item me-4">
                <Link to="/" className="social-media-buttons-btn btn-rotate white-iconic-btn">
                    <i className="social-media-buttons-icon fa fa-dribbble"></i>
                </Link>
            </li>

        </ul>
    )
}

export const Contacts = () => {

    return (
        <ul className="contacts-list list-unstyled m-0 d-flex justify-content-start align-items-center">

            <li className="contacts-item me-4 white-text">
                <i className="fa fa-phone me-2"></i>
                +94 123-456-78-90 
            </li>

            <li className="contacts-item me-4 white-text">
                <i className="fa fa-envelope me-2"></i>
                aysu@construction.com 
            </li>

            <li className="contacts-item me-4 white-text">
                <i className="fa fa-clock-o me-2"></i>
                Mon-Fri: 7:00 - 17:00 
            </li> 

        </ul>
    )
}

export const OurPartners = (props) => {

    const {className} = props;

    const {t, i18n} = useTranslation('common');

    return (
        <div className={`our-partners ${className}`}>
           
            <h3 className="our-partners-title yellow-underline underline-left border-bottom-lightgrey-3 grey-title">
                {t('titles.ourPartners')}
            </h3>

            <div className="our-partners-list list-2 mt-5">

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg01} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg02} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg03} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg04} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg05} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

                <Link to="/" className="our-partners-item">
                    <img src={Images.ourPartnersImg06} alt="Our Partner Img" className="our-partners-img w-100 h-auto opacity-on-hover" />
                </Link>

            </div>

        </div>
    )

}

export const MainComments = (props) => {

    const {className} = props;

    const {t, i18n} = useTranslation('common');

    return (
        <div className={`main-comments ${className}`}>
            
            <h3 className="main-comments-title yellow-underline underline-left border-bottom-lightgrey-3 grey-title">
                {t('titles.testimonials')}
            </h3>
            
            <SimpleCarousel className="main-comments-carousel mt-5">

                {/* slide */}
                <div className="main-comments-slide slide overflow-visible">

                    <p className="main-comments-slide-text p-6 bg-lightgrey grey-text fst-italic grey-arrow-indicator">
                        Your efficient planning, scheduling, management, and supervision 
                        resulted in timely completion and a quality 
                        facility...Particularly refreshing was the spirit of 
                        cooperation demonstrated by your firm which served to minimize 
                        costly delays and contract modifications.
                    </p>

                    <div className="main-comments-bottom-box mt-3">

                        <div className="main-comments-user mt-2 ms-5 ps-4 d-flex justify-content-start align-items-center">

                            <img src={Images.userImg01} alt="User Img" className="main-comments-user-img me-4 rounded-pill small-img-2"/>

                            <div className="main-comments-user-text-box flex-grow-1">

                                <div className="main-comments-user-name grey-title normal-font d-flex justify-content-between align-items-center">
                                    
                                    <span>AYSU QURBANLI</span>

                                    <div className="main-comments-user-stars d-none d-sm-inline-flex justify-content-start align-items-center pe-4">
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star yellow-color"></i>
                                    </div>

                                </div>

                                <p className="main-comments-user-text grey-text opacity-50">
                                    Architectural Co.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                 {/* the-end-of-slide */}

                {/* slide */}
                <div className="main-comments-slide slide overflow-visible">

                    <p className="main-comments-slide-text p-6 bg-lightgrey grey-text fst-italic grey-arrow-indicator">
                        Your efficient planning, scheduling, management, and supervision 
                        resulted in timely completion and a quality 
                        facility...Particularly refreshing was the spirit of 
                        cooperation demonstrated by your firm which served to minimize 
                        costly delays and contract modifications.
                    </p>

                    <div className="main-comments-bottom-box mt-3">

                        <div className="main-comments-user mt-2 ms-5 ps-4 d-flex justify-content-start align-items-center">

                            <img src={Images.userImg02} alt="User Img" className="main-comments-user-img me-4 rounded-pill small-img-2"/>

                            <div className="main-comments-user-text-box flex-grow-1">

                                <div className="main-comments-user-name grey-title normal-font d-flex justify-content-between align-items-center">
                                    
                                    <span>AYSEL QURBANLI</span>

                                    <div className="main-comments-user-stars d-none d-sm-inline-flex justify-content-start align-items-center pe-4">
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star yellow-color"></i>
                                    </div>

                                </div>

                                <p className="main-comments-user-text grey-text opacity-50">
                                    Architectural Co.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                 {/* the-end-of-slide */}

                {/* slide */}
                <div className="main-comments-slide slide overflow-visible">

                    <p className="main-comments-slide-text p-6 bg-lightgrey grey-text fst-italic grey-arrow-indicator">
                        Your efficient planning, scheduling, management, and supervision 
                        resulted in timely completion and a quality 
                        facility...Particularly refreshing was the spirit of 
                        cooperation demonstrated by your firm which served to minimize 
                        costly delays and contract modifications.
                    </p>

                    <div className="main-comments-bottom-box mt-3">

                        <div className="main-comments-user mt-2 ms-5 ps-4 d-flex justify-content-start align-items-center">

                            <img src={Images.userImg03} alt="User Img" className="main-comments-user-img me-4 rounded-pill small-img-2"/>

                            <div className="main-comments-user-text-box flex-grow-1">

                                <div className="main-comments-user-name grey-title normal-font d-flex justify-content-between align-items-center">
                                    
                                    <span>AYAN QURBANLI</span>

                                    <div className="main-comments-user-stars d-none d-sm-inline-flex justify-content-start align-items-center pe-4">
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star yellow-color"></i>
                                    </div>

                                </div>

                                <p className="main-comments-user-text grey-text opacity-50">
                                    Architectural Co.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                 {/* the-end-of-slide */}

                {/* slide */}
                <div className="main-comments-slide slide overflow-visible">

                    <p className="main-comments-slide-text p-6 bg-lightgrey grey-text fst-italic grey-arrow-indicator">
                        Your efficient planning, scheduling, management, and supervision 
                        resulted in timely completion and a quality 
                        facility...Particularly refreshing was the spirit of 
                        cooperation demonstrated by your firm which served to minimize 
                        costly delays and contract modifications.
                    </p>

                    <div className="main-comments-bottom-box mt-3">

                        <div className="main-comments-user mt-2 ms-5 ps-4 d-flex justify-content-start align-items-center">

                            <img src={Images.userImg04} alt="User Img" className="main-comments-user-img me-4 rounded-pill small-img-2"/>

                            <div className="main-comments-user-text-box flex-grow-1">

                                <div className="main-comments-user-name grey-title normal-font d-flex justify-content-between align-items-center">
                                    
                                    <span>SƏMA QURBANLI</span>

                                    <div className="main-comments-user-stars d-none d-sm-inline-flex justify-content-start align-items-center pe-4">
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star me-2 yellow-color"></i>
                                        <i className="fa fa-star yellow-color"></i>
                                    </div>

                                </div>

                                <p className="main-comments-user-text grey-text opacity-50">
                                    Architectural Co.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                 {/* the-end-of-slide */}                                                   

                 

            </SimpleCarousel>

        </div>
    )

}


export const WhyChooseUs = (props) => {

    const {className, list} = props;
    
    const {t, i18n} = useTranslation('common');

    const { Panel } = Collapse;

    const lan = i18next.language;
                     
    return (
        <div className={`why-choose-us ${className}`}>

            <h3 className="main-comments-title yellow-underline underline-left border-bottom-lightgrey-3 grey-title">
                {t('titles.whyChooseUs')}
            </h3>

            <Collapse defaultActiveKey={['1']} accordion className="mt-5 border-0 ant-collapse-style">

                { list.map((item , i)=>(

                    <Panel header={item[`title_${lan}`]} key={i} className="mb-3 grey-text">
                        <p className="grey-text">{item[`text_${lan}`]}</p>
                    </Panel>

                ))}
                
            </Collapse>

        </div>
    )

}

export const AboutUsList = () => {

    const {t, i18n} = useTranslation('common');
    
    return (
        <div className="about-us-list col-12 col-lg-4 pe-lg-2 mt-5 mt-lg-0">
             
             <h3 className="about-us-list-title yellow-underline underline-left grey-title white-color">
                {t('titles.aboutUs')}
            </h3>

            <img src={logo} alt="Navbar Brand" className="brand-img-2 mt-9" />

            <p className="about-us-list-text grey-text mt-4">
                {t('texts.aboutUsText')}
            </p>

        </div>
    )

}

export const CompanyLinksList = () => {

    const {t, i18n} = useTranslation('common');
    
    return (
        <div className="company-links col-12 col-lg-4 mt-5 mt-lg-0">
             
            <h3 className="company-links-title yellow-underline underline-left grey-title white-color">
                {t('titles.companyLinks')}
            </h3>

            <div className="company-links-list mt-9 row gx-0 w-100 mx-auto justify-content-between flex-wrap">

                <Link to="/" className="company-links-btn grey-btn col-6">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link01')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link02')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link03')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link04')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link05')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link06')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link07')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link08')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link09')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link10')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link11')}
                </Link>

                <Link to="/" className="company-links-btn grey-btn col-6 mt-3">
                    <i className="fa fa-chevron-right"></i>
                    {t('links.link12')}
                </Link>

            </div>

        </div>
    )
    
}

export const ContactInfoList = () => {

    const {t, i18n} = useTranslation('common');
    
    return (
        <div className="contact-info col-12 col-lg-4 mt-5 mt-lg-0">
             
             <h3 className="contact-info-title yellow-underline underline-left grey-title white-color">
                {t('titles.contactInfo')}
            </h3>

            <p className="contact-info-text grey-text mt-4">
                <strong className="me-2">{t('titles.address')}:</strong> 
                Adress of Aysu Construction, adress of Aysu Construction
            </p>

            <p className="contact-info-text grey-text mt-1">
                <strong className="me-2">{t('titles.phone')}:</strong> 
                +94 123-456-78-90
            </p>

            <p className="contact-info-text grey-text mt-1">
                <strong className="me-2">{t('titles.email')}:</strong> 
                aysu@construction.com
            </p>

            <ul className="contact-info-list d-flex justify-content-start align-items-center list-unstyled mb-0 mt-4 p-0">

                <li className="contact-info-item">
                    <Link to="/" className="contact-info-btn black-iconic-btn me-2">
                        <i className="fa fa-twitter"></i>
                    </Link>
                </li>

                <li className="contact-info-item">
                    <Link to="/" className="contact-info-btn black-iconic-btn me-2">
                        <i className="fa fa-facebook"></i>
                    </Link>
                </li>

                <li className="contact-info-item">
                    <Link to="/" className="contact-info-btn black-iconic-btn me-2">
                        <i className="fa fa-google"></i>
                    </Link>
                </li>

                <li className="contact-info-item">
                    <Link to="/" className="contact-info-btn black-iconic-btn me-2">
                        <i className="fa fa-pinterest"></i>
                    </Link>
                </li> 

                <li className="contact-info-item">    
                    <Link to="/" className="contact-info-btn black-iconic-btn me-2">
                        <i className="fa fa-dribbble"></i>
                    </Link>
                </li>    

            </ul>

        </div>
    )

}


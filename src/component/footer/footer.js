import React from 'react'
import img from '../../asserts/images/cropped-Header-logo-527-148-01.png'
import Style from '../footer/style'
import '../../asserts/style/style.css'
export default ()=>{
    return(
        <>
        <section className="">
            <div className="container-fluid footer">
            <div className="row">
            <div className="col-md-12">
            <div className="footer-div1">
            <div className="pt-5"><img style={{width:"300px"}} src={img}/></div>
            <div className="pt-5"><p>Copyright 2019 blackberryfinancesolutions.netlify.com All Rights Reserved.</p></div>
            <div className="footer-div2 pt-4"><p>Blackberryfinancesolutions.netlify.com is a trading style of Money Tree Media Limited.
            </p>
            <p className="pt-4">We will never charge you any fees for using the services on this site whatsoever.
                Therefore as an introducer we may receive a commission from our selected partners whom you may be referred to.</p>
            </div>
            <div className="pt-4">
                <ul className="footer-ul">
                    <li><a href="#"><b>Contact Details</b></a></li>
                    <li><a href="#"><b>Website Copyright Details</b></a></li>
                    <li><a href="#"><b>Terms & Conditions</b></a></li>
                    <li><a href="#"><b>Privacy Policy</b></a></li>
                </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            <Style/>
        </>
    );
}
import './Portfolio.scss'
import React from "react";

function Portfolio() {

    return (
        <div className="container-fluid" id="main-port">
            <div className="container">
                <div className="port-div">
                    <span className="port-header">Portfolio</span>
                    <hr className="line-port"/>
                    <p style={{fontSize: "20px", fontFamily: "BlinkMacSystemFont"}}>My Blog / Website</p>

                    <div className="row py-5">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src="/website.png" className="card-img-top card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Website</h5>
                                    <p className="card-text">This is my website to summarize what I'm learning about
                                        programming.</p>
                                    <a href="https://dev7days.gitbook.io/dev7days/" className="btn btn-secondary">Visit
                                        Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src="/gamer.png" className="card-img-top card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog</h5>
                                    <p className="card-text">Gamer to Coder เด็กติดเกมสู่เด็กติดโค้ด</p>
                                    <a href="https://medium.com/@dsorn2/gamer-to-coder-%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94-7029744fdcc7"
                                       className="btn btn-secondary">Visit
                                        Blog</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src="/docker.png" className="card-img-top card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog</h5>
                                    <p className="card-text">Docker #1 วาฬน้อยแสนหรรษา</p>
                                    <a href="https://medium.com/@dsorn2/docker-1-%E0%B8%A7%E0%B8%B2%E0%B8%AC%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AB%E0%B8%A3%E0%B8%A3%E0%B8%A9%E0%B8%B2-b149dc493812"
                                       className="btn btn-secondary">Visit
                                        Blog</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src="/docker2.png" className="card-img-top card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog</h5>
                                    <p className="card-text">มาใช้ Docker กันเถอะ #2</p>
                                    <a href="https://medium.com/@dsorn2/%E0%B8%A1%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89-docker-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-2-d41a02d1ad70"
                                       className="btn btn-secondary">Visit
                                        Blog</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <img src="/ioc.png" className="card-img-top card-img" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Blog</h5>
                                    <p className="card-text">Dependency Injection (DI) และ Inversion of Control
                                        (IOC)</p>
                                    <a href="https://medium.com/@dsorn2/dependency-injection-di-%E0%B9%81%E0%B8%A5%E0%B8%B0-inversion-of-control-ioc-6bb8341dd40b"
                                       className="btn btn-secondary">Visit
                                        Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;

import React from 'react';
import logo1 from '../../images/1.jpg'
import logo2 from '../../images/2.jpg'
import logo3 from '../../images/3.jpg'
import html from '../../images/html.png'
import Css from '../../images/Css.png'
import Js from '../../images/Js.png'

function Main(props) {
    return (
        <div>
            <div className="container-fluid row">
                <div className="container mt-5 col d-flex justify-content-center align-items-center">
                    <div className="card cards shadow-lg p-3 mb-5 bg-white rounded">
                        <img src={html} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-title"><h5>HTML</h5></div>
                            <div className="card-text mb-2">Cascading Style Sheets is a style sheet language.</div>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="container col mt-5 d-flex justify-content-center align-items-center">
                    <h5>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

                        Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

                        HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items.</h5>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="container col mt-5 d-flex justify-content-center align-items-center">
                    <h5>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]

                        CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages.</h5>
                </div>
                <div className="container mt-5 col d-flex justify-content-center align-items-center">
                    <div className="card cards shadow-lg p-3 mb-5 bg-white rounded">
                        <img src={Css} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-title"><h5>CSS</h5></div>
                            <div className="card-text mb-2">The HyperText Markup Language, or HTML is the standard markup language.</div>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid row">
                <div className="container mt-5 col d-flex justify-content-center align-items-center">
                    <div className="card cards shadow-lg p-3 mb-5 bg-white rounded">
                        <img src={Js} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="card-title"><h5>JAVASCRIPT</h5></div>
                            <div className="card-text mb-2">JavaScript, often abbreviated as JS, is a programming language.</div>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="container col mt-5 d-flex justify-content-center align-items-center">
                    <h5>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[11] Over 97% of websites use it client-side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.</h5>
                </div>
            </div>

            <footer class="page-footer font-small unique-color-dark pt-4 bg-dark text-white">


                <div class="container">


                    <ul class="list-unstyled list-inline text-center py-2">
                        <li class="list-inline-item">
                            <h5 class="mb-1">Register for free</h5>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="btn btn-outline-white btn-rounded text-white">Sign up!</a>
                        </li>
                    </ul>


                </div>
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>

            </footer>
        </div>
    )
}

export default Main;
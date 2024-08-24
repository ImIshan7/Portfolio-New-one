import {Component} from "react";
import './style.css';
import service01 from '../images/service01.png';
import css from '../images/tecnology/css.png';
import figma from '../images/tecnology/figma.png';
import boostrap from '../images/tecnology/boostrap.png';
import html from '../images/tecnology/html.png';
import javascript from '../images/tecnology/javascript.png';
import react from '../images/tecnology/react.png';
import tailwind from '../images/tecnology/tailwind.png';
import typescript from '../images/tecnology/typescript.png';
import github from '../images/tecnology/git1.png';
import intelij from '../images/tecnology/intelij.png';
import nodejs from '../images/tecnology/nodejs.png';
import java from '../images/tecnology/java3.png';
import tomcat from '../images/tecnology/tomcat.png';
import mysql from '../images/tecnology/mysql.png';
import vscode from '../images/tecnology/vscode.png';
import watchhub from '../images/projects/watchhub.png';
import traveller from '../images/projects/booking.png';
import computershop from '../images/projects/computershop.png';
import game from '../images/projects/game.png';
import google from '../images/projects/carrental.png';
import hostel from '../images/projects/hostel.png';
import netflix from '../images/projects/netflix.png';
import porthtml from '../images/projects/porthtml.png';
import reactport from '../images/projects/reactport.png';

export class Home extends Component {
    render() {
        return (
            <div>
                <nav className="bg-black text-white py-3 px-4 flex items-center justify-between">
                    <a className="font-extrabold text-yellow-400 text-xl tracking-tight" href="#">Ishan</a>
                    <div className="flex items-center">
                        <a className="text-xl font-bold font-mono  px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#home">Home</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#about">About</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#project">Project</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#service">Service</a>
                        <a className="text-xl font-bold font-mono px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#contact">Contact</a>
                    </div>
                </nav>

                <section id="home" className="pt-12 bg-black sm:pt-16">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p
                                className="max-w-4xl mx-auto mb-4 text-6xl font-bold hover:text-yellow-400 font-mono leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                                Full Stack Developer <br />
                                Entrepreneur<br/>
                                Digital Creator
                            </p>
                            <h1 className="max-w-2xl mx-auto px-6 text-lg text-white font-inter">
                                Give The Best Things For You and Modern Work Experience For Your Business
                            </h1>
                            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                                <a href="#about" title=""
                                   className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                   role="button">
                                    Hire me
                                </a>
                                <a href="#contact"
                                   className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                   role="button">Contact US</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black">
                        <div className="relative mx-auto mt-4 md:mt-8">
                            <div className="lg:max-w-4xl lg:mx-auto">
                                <img className="px-4 md:mpx-8 duration-500 hover:scale-105 hover:shadow-xl" src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac" />
                            </div>
                        </div>
                    </div>

                </section>

                <div id="about" className="px-2 py-20 w-full flex justify-center bg-black">
                    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                        <div className="lg:w-1/2">
                            <div id="backgroundimage" className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
                            </div>
                        </div>
                        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                            <h2 className="text-5xl text-gray-800  font-mono font-extrabold">
                                Who Am I ?
                            </h2>
                            <p className="mt-4 font-bold text-gray-950">

                                Ishan Dhananjana: A Journey of Passion

                                In the charming city of Galle, Sri Lanka, Ishan Dhananjana's story unfolds with a vibrant
                                tapestry of passion and purpose. Born on February 20, 2001, Ishan's journey is a testament
                                to resilience and determination. From his early fascination with technology to his freelance
                                endeavors, Ishan's portfolio reflects his creativity and commitment. His narrative inspires
                                others to embrace their dreams and persevere against all odds. With each step forward,
                                Ishan continues to carve his path, driven by his unwavering love for innovation and
                                storytelling.

                            </p>

                            <div className=" flex justify-center mt-5 space-x-5">
                                <a href="https://www.facebook.com/ishan.danu.9" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                                </a>
                                <a href="https://www.linkedin.com/in/ishan-dhananjana-615878226/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                                </a>
                                <a href="https://www.instagram.com/im_i__shan/?fbclid=IwAR11_LHvNk4u28y6NvOHI9UcfAY-q5FKcZzO6Crn2lmFJxzUFaLyf2_UhOc" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                                </a>
                                <a href="https://www.facebook.com/ishan.danu.9" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                                </a>
                                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fishandananjay10" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                                </a>

                                <a href="https://github.com/ImIshan7" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/github.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black p-4">
                    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                        <div className="flex md:contents flex-row-reverse">
                            <div
                                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Yatalamaththa Maha Vidyalaya (2007-2017) </h3>
                                <p className="mt-2 leading-6">I did my primary and secondary education
                                    well here.</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Ordinary Level</span>
                            </div>
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                    </div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300"></div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Dr.Richard Pathirana Collage (2018-2020)</h3>
                                <p className="mt-2 leading-6">I did my advanced level education well here.</p>
                                <span className="absolute text-sm  font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Advanced Level </span>
                            </div>
                        </div>

                        <div className="flex md:contents flex-row-reverse">
                            <div
                                className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Institute of Software Engineering (2022-2024)</h3>
                                <p className="mt-2 leading-6">After completing my high school education, I
                                    pursued a graduate diploma in a software
                                    engineering course at the Institute of Software
                                    Engineering.</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">HND Level</span>
                            </div>
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                    </div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                                <div className="flex items-center justify-center w-6 h-full">
                                    <div className="w-1 h-full bg-indigo-300"></div>
                                </div>
                                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                            </div>
                            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                                <h3 className="text-lg font-semibold lg:text-xl">Institute of Software Engineering (2024-2025)</h3>
                                <p className="mt-2 leading-6">I do my graduation here after completing
                                    my graduate diploma in software
                                    engineering course</p>
                                <span className="absolute text-sm font-bold text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Degree Level</span>
                            </div>
                        </div>

                    </div>
                </div>


                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-mono font-bold text-white text-4xl text-center">
                            TECHNICAL SKILLS
                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={java}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            Java
                                        </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={javascript}/>

                                        <h3 className="font-medium text-white text-2xl text-center">
                                            JavaScript
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={typescript}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                            TypeScript
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={mysql}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                            mysql
                                        </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={html}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            HTML
                                        </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={css}/>


                                        <h3 className="font-medium text-white text-2xl text-center">
                                            CSS
                                        </h3>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-mono font-bold text-white text-4xl text-center duration-500 hover:scale-110 hover:shadow-xl">
                            TECHNOLOGY STACK

                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={github}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Git
                                    </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={tomcat}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Tomcat
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={boostrap}/>



                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Bootstrap
                                    </h3>
                                </a>

                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={tailwind}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Tailwind CSS
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={nodejs}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Node JS
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={react}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        React
                                    </h3>
                                </a>

                            </div>

                        </div>

                    </div>


                </section>

                <section className="bg-black">
                    <div className="max-w-7xl mx-auto px-8 py-4 space-y-16">
                        <h2 className="font-heading font-bold text-white text-4xl text-center">
                        </h2>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-32 w-32 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={vscode}/>


                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Vs Code
                                    </h3>
                                </a>
                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">


                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={figma}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        Figma
                                    </h3>
                                </a>


                            </div>

                            <div className="space-y-4">
                                <a href="#" target="_blank" className="space-y-2">

                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-32 xl:h-32 duration-500 hover:scale-110 hover:shadow-xl" src={intelij}/>

                                    <h3 className="font-medium text-white text-2xl text-center">
                                        IntelliJ Idea
                                    </h3>
                                </a>

                            </div>

                        </div>

                    </div>
                </section>



                <section className="flex flex-col justify-center bg-black max-w-full min-h-screen px-4 py-10 mx-auto sm:px-6">
                    <div className="flex flex-wrap items-center justify-between mb-8">
                        <h2 id="project" className="mr-10 text-4xl font-bold font-mono text-white text-center leading-none md:text-5xl">
                            PROJECTS
                        </h2>

                    </div>

                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={watchhub}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                    <div>

                                        <a href="https://github.com/ImIshan7/Zen-Watch-Hub.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Zen Watch Hub React Web Application  </a>
                                        <p className="mb-4 font-medium">
                                            This is a Web E commerce application for selling watches. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={traveller}/>
                            <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                <div>
                                    <a href="https://github.com/ImIshan7/Zen-Travel-System.git"
                                       className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                        Zen Traveller React Web Application
                                    </a>
                                    <p className="mb-4">
                                        This is a full stack web application using react,tailwind css,node js,mongodb
                                        and intellij idea technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={netflix}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Netflix-clone-React-application.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Netflix Clone React Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for watching movies. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={google}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Zen-Easy-Car-Rent.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Car Rental Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is Spring Boot application for car rental. This is a full stack application
                                            using spring,HTML,Css,Java Script,MY SQL,Hibernate and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={reactport}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/My-Portfolio.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Portfolio React Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for my portfolio. This is a full stack application
                                            Using React,Tailwind CSS,IntelliJ Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={game}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Night-Game-2D.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Night Servior 2D Game Application
                                        </a>
                                        <p className="mb-4">
                                            This is a 2D game application. This is a full stack application
                                            Using HTML,CSS,Java Script and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={porthtml}/>


                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/MyPortfolio.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Portfolio  Web Application
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for my portfolio. This is a full stack application
                                            Using HTML,CSS,and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={hostel}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Hostel-System-Hibernate.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold  leading-tight hover:underline hover:text-blue-600">
                                            Hostel Management System
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for managing hostel. This is a full stack application
                                            Using Hibernate,layered Architecture and Intellij Idea Technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                            <img className="object-cover object-center w-full h-48 duration-500 hover:scale-110 hover:shadow-xl" src={computershop}/>

                            <div className="flex flex-grow">
                                <div className="triangle"></div>
                                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                    <div>
                                        <a href="https://github.com/ImIshan7/Computershop.git"
                                           className="block mb-4 text-2xl text-black font-mono font-bold leading-tight hover:underline hover:text-blue-600">
                                            Computer Shop Management System
                                        </a>
                                        <p className="mb-4">
                                            This is a Web application for managing computer shop. This is a full stack application
                                            Using Java,MVC Architecture and Intellij Idea Technologies.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="max-w-full-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 bg-black">
                    <div className=" mb-10">
                        <h2 id="service" className="text-5xl tracking-tight font-bold text-white font-mono text-primary-800">SERVICES</h2>
                    </div>

                    <div className="flex flex-col md:flex-row">

                        <div className="mr-0 md:mr-8 mb-6 md:mb-0">

                         <img className="w-1/2 md:w-full mx-auto  duration-500 hover:scale-110 hover:shadow-xl" src={service01}/>

                        </div>


                        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Web Application Development</h3>
                                    <p className="text-lg text-white"> Create web-based applications for businesses and organisations. </p>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Mobile Applications Development</h3>
                                    <p className="text-lg text-white"> Design and develop mobile applications for IOS and ANDROID platforms. </p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">Stand-alone Application Development</h3>
                                    <p className="text-lg text-white">Create web-based applications for businesses and organisations.</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-bold font-mono text-white underline text-md mb-6">UI/UX Design</h3>
                                    <p className="text-lg text-white">Offer usr interface and user experience design service to create intuitive and user friendly applications.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div className="bg-black " id="contact">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
                        <h2 id="contact" className="text-5xl font-mono text-white font-bold">Contact</h2>

                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                        <div>

                            <p className="max-w-sm mt-4 mb-4 text-white text-lg font-semibold">Have something to say? We are here to help. Fill up the form or send email or call phone.</p>
                            <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path>
                                </svg>
                                <span>Galle,Sri Lanka</span>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                </svg>
                                <a href="mailto:ishandanu999@gmail.com">ishandanu999@gmail.com</a>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                </svg>
                                <a href="tel:0771867407">+94 771867407</a>
                            </div>
                        </div>
                        <div>
                            <form>
                                <input type="checkbox" id="botCheck" className="hidden" style={{ display: "none" }} name="botcheck" />
                                <div className="mb-5">
                                    <input type="text" placeholder="Full Name" autoComplete="off" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder-text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="name" />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email_address" className="sr-only">Email Address</label>
                                    <input id="email_address" type="email" placeholder="Email Address" autoComplete="off" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder-text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="email" />
                                </div>
                                <div className="mb-3">
                                    <textarea placeholder="Your Message" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white dark:placeholder-text-neutral-200 dark:bg-neutral-900 rounded-md outline-none h-36 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="message" />
                                </div>
                                <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
                );
    }
}
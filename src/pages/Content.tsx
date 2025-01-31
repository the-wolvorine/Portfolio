import {
    CommandLineIcon,
    WindowIcon,
    ShieldCheckIcon,
    ArrowTopRightOnSquareIcon,
    PhoneArrowUpRightIcon,
    ChevronDoubleUpIcon,
    EnvelopeIcon,
    DocumentArrowDownIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {animateScroll as scroll} from 'react-scroll';

export default function Content() {
    const handleScrollToTop = () => {
        scroll.scrollToTop();
    };
    const handleDownload = () => {
        const win = window.open('/Udays_Resume.pdf', '_blank');
        win?.focus();
    };
    return (
        <div className="font-sans relative isolate w-full">
            <section id="about" className="bg-slate-900 py-24 sm:py-32">
                <div className="mx-auto px-6 lg:px-20">
                    <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl mb-20">{"Hi, I'm Uday. Nice to meet you."}</h2>
                    <p className="mt-6 text-lg text-center leading-8 text-gray-300">
                    With 5 years of extensive IT experience, I am a skilled Front-End UI developer proficient in HTML5, CSS, JavaScript, jQuery, AJAX, JSON, XML, Bootstrap, ReactJS, AngularJS, TypeScript, Nodejs, and Redux. My expertise lies in designing robust and scalable full-stack applications. I prioritize quality through unit testing, Agile methodologies, and thorough analysis. I actively contribute to SCRUM meetings, follow industry best practices, and possess knowledge of data manipulation and modeling principles.
                    </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-row flex-wrap justify-center items-center px-10 pb-10">
                <div className="w-full md:w-1/2 xl:w-1/3 -mx-4 -mt-10 mb-10">
                    <div className="px-0 lg:px-12 sm:px-6 mb-12">
                        <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "30rem"}}>
                            <WindowIcon className="h-16 w-16 text-slate-900 bg-green-300 rounded-lg" aria-hidden="true" />
                            <h3 className="text-xl font-semibold m-2">Frontend Developer</h3>
                            <p className="p-4 text-center text-black">Highly skilled in ReactJS with Redux architecture and proficient in CSS3, SCSS, Flexbox, and CSS-Grids. Adheres to Agile methodology, utilizes version control tools like Git, and follows the Model-View-Controller (MVC) design pattern and Test-Driven Development (TDD) practices. Additionally, experienced in AngularJS, VueJS, NextJS and is proficient in popular libraries such as Bootstrap and TailwindCSS.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 -mx-4 -mt-10 mb-10">
                    <div className="px-0 lg:px-12 sm:px-6 mb-12">
                        <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "30rem"}}>
                            <ShieldCheckIcon className="h-16 w-16 text-slate-900 bg-green-300 rounded-lg" aria-hidden="true" />
                            <h3 className="text-xl font-semibold m-2">Quality Analyst</h3>
                            <p className="p-4 text-center text-black">Skilled Quality Analyst with experience in software testing, test automation, and quality assurance. Proficient in creating and executing test plans, test scripts, and test cases, while identifying and remedying defects within the production process. Experienced in utilizing industry best practices, including Agile methodologies, unit testing, and performance testing, along with knowledge of tools such as RSpec, Selenium, JUnit, Jest, Karma, and Jasmine.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 -mx-4 -mt-10 mb-10">
                    <div className="px-0 lg:px-12 sm:px-6 mb-12">
                        <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "30rem"}}>
                            <CommandLineIcon className="h-16 w-16 text-slate-900 bg-green-300 rounded-lg" aria-hidden="true" />
                            <h3 className="text-xl font-semibold m-2">Backend Developer</h3>
                            <p className="p-4 text-center text-black">Experienced backend developer proficient in developing backend components, integrating user-facing elements, and optimizing database procedures using SQL. Possesses expertise in RESTful APIs and has hands-on experience with MongoDB and Firebase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="experience" className="py-24 sm:py-32">
                <h2 className="text-3xl text-center font-bold tracking-tight text-black sm:text-4xl pb-4 mb-20">My Professional Journey</h2>
                <div className="flex flex-row flex-wrap justify-center items-center pr-4">
                <div className="w-full md:w-1/2 xl:w-1/3 mb-12">
                    <div className="bg-white overflow-hidden">
                        <div className="flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold m-2">Software Developer</h3>
                        <p>Feb 2024 - Current</p>
                        <div className="border-t border-gray-200 pt-4 mx-8">
                            <p className="px-8 pt-8 text-center text-black">Led a team of front-end developers using MERN stack to build and maintain responsive web applications. Implemented new features, optimized performance, ensured quality through testing, and leveraged machine learning for personalized recommendations.</p>
                        </div>
                        <ul className="mx-4 px-12 flex flex-wrap justify-center">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">MERN Stack</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">ReactJS</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">NodeJS</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">RESTful APIs</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">Selenium</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">Python</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 mb-12">
                        <div className="bg-white overflow-hidden">
                            <div className="flex flex-col justify-center items-center">
                            <h3 className="text-xl font-semibold m-2">Full Stack Developer</h3>
                            <p>Mar 2020 - Dec 2021</p>
                            <div className="border-t border-gray-200 pt-4 mx-8">
                                <p className="px-8 pt-8 text-center text-black">Responsible for developing and maintaining web applications, with exposure to both frontend and backend technologies. Collaborating with senior consultants to provide technical expertise, participate in project planning and execution, and contribute to the development of scalable and secure solutions.</p>
                            </div>
                            <ul className="mx-4 px-12 flex flex-wrap justify-center">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">ReactJS</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">React Native</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">JavaScript</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">TypeScript</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">Angular</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">Ruby on Rails</div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 mb-12">
                        <div className="bg-white overflow-hidden">
                            <div className="flex flex-col justify-center items-center">
                            <h3 className="text-xl font-semibold m-2">Junior Full-stack Developer</h3>
                            <p>Sep 2017 - Feb 2020</p>
                            <div className="border-t border-gray-200 pt-4 mx-8">
                                <p className="px-8 pt-8 text-center text-black">As a junior developer, I have gained hands-on experience in designing and developing web applications and contributed my skills to build robust and scalable features. With a strong focus on learning and problem-solving, I have actively participated in cross-functional teams and adapted to agile development methodologies.</p>
                            </div>
                            <ul className="mx-4 px-12 flex flex-wrap justify-center">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">HTML</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">CSS</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">JavaScript</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">JQuery</div>
                                </li>
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-lg border border-black bg-white hover:bg-slate-300 px-3 py-1 text-xs font-medium leading-5 text-black ">Unit Testing</div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="bg-slate-900 py-24 sm:py-32">
                <div className="mx-auto px-6 lg:px-20">
                    <div className="mx-auto lg:mx-0 mb-20">
                    <h2 className="text-3xl text-center font-bold tracking-tight text-white sm:text-4xl">My Recent Projects.</h2>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 mt-8">
                            <div className="px-0 lg:px-12 sm:px-6 mb-12">
                                <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg shadow-cyan-500/50 overflow-hidden">
                                    <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "25rem"}}>
                                    <h3 className="text-xl font-semibold m-2">Keep View Note</h3>
                                    <p className="p-4 text-center text-black"><b>Keep View Note</b> is a powerful note-saving application built using <b>ReactJS</b> and <b>Firebase</b>. It provides users with a seamless experience to create, edit, and organize their notes effectively.</p>
                                    <a href="https://github.com/the-wolvorine/Keep-View-Note" className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 flex text-blue-600 visited:text-purple-600 ...">Github<ArrowTopRightOnSquareIcon className="h-6 w-4" aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 mt-8">
                            <div className="px-0 lg:px-12 sm:px-6 mb-12">
                                <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg shadow-cyan-500/50 overflow-hidden">
                                    <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "25rem"}}>
                                    <h3 className="text-xl font-semibold m-2">SnugSquare</h3>
                                    <p className="p-4 text-center text-black">Worked on a cutting-edge e-commerce web application designed for enterprise-level B2B transactions. It offers a seamless user experience and leverages advanced technologies to ensure efficient operations and reliable performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 mt-8">
                            <div className="px-0 lg:px-12 sm:px-6 mb-12">
                                <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg shadow-cyan-500/50 overflow-hidden">
                                    <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "25rem"}}>
                                    <h3 className="text-xl font-semibold m-2">Inbag</h3>
                                    <p className="p-4 text-center text-black">{"InBag is a timely and convenient online marketplace that caters to people's essential needs, delivering products directly to their doorstep amidst the COVID-19 lockdown. It's tech stack consisting of Angular, and Ruby on Rails, ensuring a seamless user experience."}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 mt-8">
                            <div className="px-0 lg:px-12 sm:px-6 mb-12">
                                <div className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg shadow-lg shadow-cyan-500/50 overflow-hidden">
                                    <div className="flex flex-col justify-center items-center p-4" style={{"minHeight": "25rem"}}>
                                    <h3 className="text-xl font-semibold m-2">NovoJuris</h3>
                                    <p className="p-4 text-center text-black">NovoJuris Legal is a modern law firm that simplifies the legal process by offering an accessible platform for customers to create legal documents, receive expert legal advice from top lawyers, and conveniently download the necessary documents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="mb-16">
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-black sm:text-4xl mb-20">
                        Skills & Expertise
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/react.png"
                            alt="ReactJS"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/angularjs.png"
                            alt="AngularJS"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/JavaScript.png"
                            alt="JavaScript"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/nextjs.png"
                            alt="nextJS"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/nodeJS.png"
                            alt="Node"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/RubyLogo.png"
                            alt="Ruby"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/Java_logo_icon.png"
                            alt="Java"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/python.png"
                            alt="Python"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/jest-logo.png"
                            alt="Jest"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/selenium.png"
                            alt="Selenium"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/GitHub.png"
                            alt="GitHub"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/Bitbucket.png"
                            alt="Bitbucket"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/MySQL-Logo.png"
                            alt="MySQL"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/firebase.png"
                            alt="Firebase"
                            width={158}
                            height={48}
                        />
                        <Image
                            className="transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                            src="/mongodb.png"
                            alt="MongoDB"
                            width={158}
                            height={48}
                        />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 pt-16 sm:pt-24 pb-8 sm:pb-12">
                <div className="mx-auto max-w-7xl px-6 -mt-48">
                    <div className="px-8 lg:px-12 sm:px-6 mb-12">
                        <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden">
                            <div id="contact" className="flex flex-col justify-center items-center p-4">
                                <h3 className="text-3xl text-white text-center font-semibold m-2">Full-stack Developer for Hire</h3>
                                <p className="p-4 text-lg text-center text-white">{"Seeking a skilled, motivated team member? Let's collaborate, exceed expectations, and achieve remarkable outcomes!"}</p>
                                <div className="flex flex-col sm:flex-row">
                                    <div className="p-4">
                                    <button onClick={handleDownload}
                                        title="View & Download"
                                        className="transition ease-in-out duration-700 hover:-translate-1 hover:scale-110 px-4 flex border-2 rounded-lg bg-blue-800 px-3.5 py-2.5 shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white hover:text-black">
                                        <p className="text-center text-lg font-semibold px-4">My Résumé</p><DocumentArrowDownIcon className="h-6 w-6 text-lg" />
                                    </button>
                                    </div>
                                    <div className="p-4">
                                    <a href="tel:+1 3143192625" title="Make a call">
                                        <button className="transition ease-in-out duration-700 hover:-translate-1 hover:scale-110 px-4 flex border-2 rounded-lg bg-blue-800 px-3.5 py-2.5 shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white hover:text-black">
                                            <p className="text-center text-lg font-semibold px-4">Say Hello</p><PhoneArrowUpRightIcon className="h-6 w-6 text-lg" />
                                        </button>
                                    </a>
                                    </div>
                                    <div className="p-4">
                                    <a href="mailto:udaycreddy11@gmail.com" title="Send an Email">
                                        <button className="transition ease-in-out duration-700 hover:-translate-1 hover:scale-110 px-4 flex border-2 rounded-lg bg-blue-800 px-3.5 py-2.5 shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white hover:text-black">
                                            <p className="text-center text-lg font-semibold px-4">Email Me</p><EnvelopeIcon className="h-6 w-6 text-lg" />
                                        </button>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a href="https://uday-cheekatipalli.vercel.app/">
                        <Image src="/lite-logo.png" width={150} height={20} alt="Logo" />
                    </a>
                    <p className="pt-4 text-2xl text-center text-white w-96">Learn, Think, Code & Execute </p>
                    <p className="pb-4 text-2xl text-center text-white w-80">one program at a time.</p>
                    <div className="flex flex-row text-white p-4">
                        <a href="https://github.com/the-wolvorine" target="_blank" className="transition ease-in-out duration-500 hover:-translate-2 hover:scale-110 px-4 hover:text-green-300" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-8 w-8" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/uday-cheekatipalli/" target="_blank" className="transition ease-in-out duration-500 hover:-translate-2 hover:scale-110 px-4 hover:text-green-300" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                        </a>
                        <a href="https://www.instagram.com/uday_reddy_c" target="_blank" className="transition ease-in-out duration-500 hover:-translate-2 hover:scale-110 px-4 hover:text-green-300" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-8 w-8" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg>
                        </a>
                    </div>
                    <p className="p-4 text-md text-center text-white w-80">Handcrafted by <u>UdayCheekatipalli</u> &copy;2023</p>
                    <div className="flex flex-row">
                        <p className="py-4 text-md text-center text-white w-20">Made with</p>
                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                            <Image src="/TailwindCss.png" width={158} height={56} alt="tailwindcss" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-row-reverse px-8">
                    <button 
                        onClick={handleScrollToTop} 
                        className="animate-bounce border-2 rounded-full bg-green-300 px-3.5 py-2.5 shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black hover:text-white"
                        title="Move to top">
                        <ChevronDoubleUpIcon className="h-8 w-6"/>
                    </button>
                </div>
            </section>
        </div>
    );
}

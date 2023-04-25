import { useState } from 'react';
import Logo from '/images/logo.svg';
import LogoFooter from '/images/logo-footer.svg';
import Hero from '/images/illustration-1.svg';
import Section from '/images/illustration-2.svg';
import Arrow from '/images/icon-arrow.svg';
import Quote from '/images/icon-quotes.svg';
import Avatar from '/images/avatar-testimonial.jpg';
import Phone from '/images/icon-phone.svg';
import Mail from '/images/icon-email.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const App = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event) => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };
    return (
        <div className="">
            {/* HERO SECTION */}
            <header className="mb-20 container mx-auto">
                <nav className=" flex items-center justify-between py-6 lg:py-10 font-primary">
                    <img className="cursor-pointer w-32 lg:w-44" src={Logo} />
                    <ul className=" flex  gap-7 lg:gap-10">
                        <li className="">
                            <a href="/">Features</a>
                        </li>
                        <li className="">
                            <a href="/">Team</a>
                        </li>
                        <li className="">
                            <a href="/">Sign In</a>
                        </li>
                    </ul>
                </nav>
                {/* hero */}
                <div className="flex flex-col lg:flex-row gap-10 items-center font-primary">
                    {/* hero text box */}
                    <div className="flex-1 order-last lg:order-first text-center lg:text-start">
                        <h1 className=" font-bold text-3xl lg:text-4xl leading-10 pb-5">
                            All your files in one secure location, accessible
                            anywhere.
                        </h1>
                        <p className="pb-4 text-lg">
                            Fylo stores your most important files in one secure
                            location. Access them wherever you need, share and
                            collaborate with friends, family and co-workers.
                        </p>
                        <form className="lg:grid lg:grid-cols-3 gap-y-4 lg:gap-7 flex flex-col">
                            <div className="col-start-1 col-end-3">
                                <input
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    type="mail"
                                    placeholder="Enter your email..."
                                    className={
                                        error
                                            ? ' border  w-full lg:w-96  p-3  border-red-600 rounded-sm text-xs focus:outline-none'
                                            : ' border p-3 col-start-1 col-end-3  border-light_gray rounded-sm text-xs focus:outline-none w-full lg:w-96'
                                    }
                                />
                                <p
                                    className={
                                        error
                                            ? 'block text-xs text-red-600'
                                            : 'hidden'
                                    }
                                >
                                    Please check your email
                                </p>
                            </div>
                            <button className=" p-2 h-10 bg-accent_blue rounded-sm text-white hover:bg-hover">
                                Get Started
                            </button>
                        </form>
                    </div>
                    {/* hero image box */}
                    <div className="flex-1">
                        <img
                            src={Hero}
                            alt="Illustration of avatar with paper"
                        />
                    </div>
                </div>
            </header>
            {/* first section */}
            <section className=" bg-bg_curve bg-cover bg-top bg-no-repeat h-full py-20 lg:py-24 lg:h-full ">
                <div className="container mx-auto flex flex-col lg:flex-row gap-10 items-center">
                    {/* section text box */}
                    <div className=" lg:order-first flex flex-col">
                        <h1 className="font-bold font-primary text-center lg:text-start text-3xl leading-10 pb-5">
                            Stay productive, wherever you are
                        </h1>
                        <p className="pb-3">
                            Never let location be an issue when accessing your
                            files. Fylo has you covered for all of your file
                            storage needs.
                        </p>
                        <p className="pb-3">
                            Securely share files and folders with friends,
                            family and colleagues for live collaboration. No
                            email attachements required!
                        </p>
                        <div className="flex items-center  justify-between self-center lg:self-start hover:border-b w-44 gap-2 text-accent_cyan  border-accent_cyan">
                            <a href="/">See how Fylo works</a>
                            <img src={Arrow} />
                        </div>
                        <div className="bg-white w-[22rem] py-4 px-7 rounded-lg shadow-xl mt-12 self-center lg:self-start">
                            <img src={Quote} />
                            <p className=" text-sm mt-3 leading-6 mb-4">
                                Fylo has improved our team productivity by an
                                order of magnitude. Since making the switch our
                                team has become a well-oiled collaboration
                                machine.
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    className=" w-10 h-10 rounded-full"
                                    src={Avatar}
                                    alt="A user profile"
                                />
                                <p className="text-primary_dark font-bold">
                                    Kyle Burton
                                    <br />
                                    <span className="text-xs font-normal">
                                        Founder & CEO, Huddle{' '}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* section image box */}
                    <div className="order-first">
                        <img src={Section} alt="avatar writing on a board" />
                    </div>
                </div>
            </section>
            {/* second section */}
            <section className=" bg-primary_desatured py-16">
                <div className="container mx-auto flex flex-col gap-y-6 lg:grid lg:grid-cols-2 items-center">
                    <div>
                        <h1 className=" font-primary font-extrabold text-white text-center lg:text-start text-2xl pb-3">
                            Get early access today
                        </h1>
                        <p className="text-white/75 text-sm max-w-lg text-center lg:text-start">
                            It only takes a minute to sign up and our free
                            starter tier is extremely generous. If you have any
                            questions, our support team would be happy to help
                            you.
                        </p>
                    </div>
                    <div className=" justify-self-end">
                        <form className="flex flex-col items-start gap-3">
                            <input
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                type="email"
                                placeholder="email@example.com"
                                className={
                                    error
                                        ? 'w-96  border border-red-600 p-3 rounded-sm text-xs focus:outline-none'
                                        : ' w-96  border border-light_gray p-3 rounded-sm text-xs focus:outline-none'
                                }
                            />
                            <p
                                className={
                                    error
                                        ? 'block text-xs text-white/80'
                                        : 'hidden'
                                }
                            >
                                Please check your email
                            </p>
                            <button className="p-3 bg-accent_blue rounded-sm text-white hover:bg-hover text-sm w-full lg:w-44">
                                Get Started For Free
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            {/* footer */}
            <footer className="bg-primary_dark text-white/80 py-16">
                <div className="container mx-auto">
                    <img className=" pb-5" src={LogoFooter} alt="Logo" />
                    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4">
                        <div className="flex flex-col gap-3">
                            <p className="flex items-center gap-5">
                                <img src={Phone} />{' '}
                                <span className="text-sm hover:text-accent_blue cursor-pointer">
                                    Phone : +1-543-123-4567
                                </span>
                            </p>
                            <p className="flex items-center gap-5">
                                <img src={Mail} />
                                <span className="text-sm hover:text-accent_blue cursor-pointer">
                                    example@fylo.com
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className=" hover:text-accent_blue" href="/">
                                About Us
                            </a>
                            <a className=" hover:text-accent_blue" href="/">
                                Jobs
                            </a>
                            <a className=" hover:text-accent_blue" href="/">
                                Press
                            </a>
                            <a className=" hover:text-accent_blue" href="/">
                                Blog
                            </a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className=" hover:text-accent_blue" href="/">
                                Contact Us
                            </a>
                            <a className=" hover:text-accent_blue" href="/">
                                Terms
                            </a>
                            <a className=" hover:text-accent_blue" href="/">
                                Privacy
                            </a>
                        </div>
                        <div className=" flex gap-3 justify-self-center">
                            <a className=" w-9 h-9 flex items-center justify-center border rounded-full hover:text-accent_blue hover:border-accent_blue cursor-pointer">
                                <FaFacebookF />
                            </a>
                            <a className=" w-9 h-9 flex items-center justify-center border rounded-full hover:text-accent_blue hover:border-accent_blue cursor-pointer">
                                <FaTwitter />
                            </a>
                            <a className=" w-9 h-9 flex items-center justify-center border rounded-full hover:text-accent_blue hover:border-accent_blue cursor-pointer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

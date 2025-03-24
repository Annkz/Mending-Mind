import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white p-8">
      <div className="w-[70vw] flex flex-col items-center mx-auto gap-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="#"
            className="bg-yellow-400 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="bg-yellow-400 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="#"
            className="bg-yellow-400 text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <BigScreen className="hidden" />
        <SmallScreen />
        <div className="border-t-2 border-gray-400 my-6 w-full pt-4">
          <p className="text-center mb-4">
            Mending Mind does not provide crisis intervention or emergency
            support. If you or someone you know requires immediate assistance,
            please don’t hesitate to seek help from crisis support
            organizations.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-y-4">
            <div className="text-center">
              <div>National Mental Health Helpline</div>
              <div>1800-599-0019</div>
            </div>

            <div className="mx-4 h-10 border-l-2 border-gray-400 hidden sm:block"></div>

            <div className="text-center">
              <div>Mann Talks</div>
              <div>+91-8686139139</div>
            </div>

            <div className="mx-4 h-10 border-l-2 border-gray-400 hidden sm:block"></div>

            <div className="text-center">
              <div>Vandrevala Foundation</div>
              <div>+91-9999666555</div>
            </div>

            <div className="mx-4 h-10 border-l-2 border-gray-400 hidden sm:block"></div>

            <div className="text-center">
              <div>Sneha</div>
              <div>+91-91675 35765 / +91-98330 52684</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BigScreen = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between max-w-[60vw] items-center mb-4 text-gray-200">
        <a href="#home" className="hover:text-yellow-500">
          Home
        </a>
        <span className="mx-2">|</span>
        <a href="#about" className="hover:text-yellow-500">
          About
        </a>
        <span className="mx-2">|</span>
        <a href="#therapy" className="hover:text-yellow-500">
          Therapy Sessions
        </a>
        <span className="mx-2">|</span>
        <a href="#community" className="hover:text-yellow-500">
          Community
        </a>
        <span className="mx-2">|</span>
        <a href="#corporate" className="hover:text-yellow-500">
          Corporate
        </a>
        <span className="mx-2">|</span>
        <a href="#internships" className="hover:text-yellow-500">
          Internships
        </a>
        <span className="mx-2">|</span>
        <a href="#resources" className="hover:text-yellow-500">
          Resources
        </a>
        <span className="mx-2">|</span>
        <a href="#contact" className="hover:text-yellow-500">
          Let's Talk
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="bg-white text-black font-bold  text-sm p-4 h-10 rounded flex justify-center items-center">
          email: mendingminds.com
        </div>
        <div className="bg-white text-black font-bold  text-sm p-4 h-10 rounded flex justify-center items-center">
          Contact: 99999 99999
        </div>
        <div className="bg-white text-black font-bold  text-sm p-4 h-10 rounded flex justify-center items-center">
          Address: Flat No. 001, Shinghar Vastu, Mulund West, Mumbai - 80
        </div>
      </div>
    </div>
  );
};

const SmallScreen = () => {
  return (
    <>
      <div className="flex gap-4 p-2 lg:hidden">
        <div className="flex flex-col gap-2 w-3/10">
          <a href="#home" className="hover:text-yellow-500">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-500">
            About
          </a>

          <a href="#therapy" className="hover:text-yellow-500">
            Therapy
          </a>

          <a href="#community" className="hover:text-yellow-500">
            Sessions
          </a>
          <a href="#community" className="hover:text-yellow-500">
            Community
          </a>
        </div>
        <div className="flex flex-col gap-2 w-3/10">
          <a href="#corporate" className="hover:text-yellow-500">
            Corporate
          </a>
          <a href="#internships" className="hover:text-yellow-500">
            Internships
          </a>

          <a href="#resources" className="hover:text-yellow-500">
            Resources
          </a>

          <a href="#contact" className="hover:text-yellow-500">
            Let's Talk
          </a>
        </div>
        <div className="flex flex-col gap-2 w-6/10">
          <div className="bg-white text-black font-bold  text-[0.5rem] sm:text-sm p-4 h-10 rounded-lg flex justify-center items-center">
            email: mendingminds.com
          </div>
          <div className="bg-white text-black font-bold  text-[0.5rem] sm:text-sm p-4 h-10 rounded-lg  flex justify-center items-center">
            Contact: 99999 99999
          </div>
          <div className="bg-white text-black font-bold  text-[0.5rem] sm:text-sm p-6 h-10 rounded-lg  flex justify-center items-center">
            Address: Flat No. 001, Shinghar Vastu, Mulund West, Mumbai - 80
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

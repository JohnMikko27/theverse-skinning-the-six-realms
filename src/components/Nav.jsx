const Nav = () => {
  return (
    <div className="flex justify-end p-2 gap-12 items-center">
      <a href="#" className="hover:text-secondary-theme">Main</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScEm9NpS5AiHxghnOkFEzrxmn85KqSdqJMiSKg2rObNdwgsuA/viewform?usp=sf_link"
        target="_blank" rel="noreferrer" className="hover:text-secondary-theme ">
        Feedback
      </a>
      <button className=" shadow-md hover:bg-green-600 hover:text-white text-black bg-secondary-theme
       p-2 rounded-md w-24 transition-all duration-200">
        Sign up
      </button>
    </div>
  );
};

export default Nav;
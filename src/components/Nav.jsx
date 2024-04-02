const Nav = () => {
  return (
    <div className="flex justify-between p-2 gap-12 items-center mx-8 bg-secondary-theme rounded-lg text-black">
      <div className="flex gap-4">
        <a href="#" 
          className=" hover:underline hover:shadow-inner hover:shadow-slate-500 
          bg-tertiary-theme p-2 rounded-lg transition-all duration-200">
          Enter The Verse 🌱
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScEm9NpS5AiHxghnOkFEzrxmn85KqSdqJMiSKg2rObNdwgsuA/viewform?usp=sf_link"
          target="_blank" rel="noreferrer" 
          className="hover:underline hover:shadow-inner hover:shadow-slate-500 
          bg-tertiary-theme p-2 rounded-lg transition-all duration-200">
        Build Your World 🌎
        </a>
      </div>
      <button className="hover:underline shadow-md shadow-slate-400 hover:bg-tertiary-theme
       bg-secondary-theme
       p-2 rounded-md w-24 transition-all duration-200">
        Sign Up 😁
      </button>
    </div>
  );
};

export default Nav;
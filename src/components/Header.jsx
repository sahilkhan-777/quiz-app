function Header(){
    return(
        <header className="bg-yellow-400 text-blue-950 w-full">
            <h1 className="py-5 flex justify-center uppercase text-6xl font-semibold">
                <span className="mr-10 flex items-center">
                    <img src="src/assets/icon.svg" alt="icon" className="w-16 h-16"/>
                </span>
                Quiz App
            </h1>
        </header>
    )
};

export default Header;
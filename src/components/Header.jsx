import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Header(){
    return(
        <header className="bg-yellow-400 text-blue-950 w-full">
            <h1 className="py-5 flex justify-center uppercase text-center text-6xl font-semibold">
                <span className="mr-2 sm:mr-5 flex items-center">
                    <LightbulbIcon sx={{ fontSize: 65 }}/>
                </span>
                Quiz App
            </h1>
        </header>
    )
};

export default Header;
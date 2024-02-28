import "./Header.css";

function Header(): JSX.Element {
    const currentDate = new Date().toLocaleDateString("en-GB"); // "26/02/2024"

    return (
        <div className="Header">
            <h1>news online {currentDate}</h1>
           
        </div>
    );
}

export default Header;

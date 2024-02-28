import "./Spinner.css";

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">

            <div className="spinner-border width: 4rem; height: 4rem;" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

        </div>
    );
}

export default Spinner;

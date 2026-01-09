const Home = () => {

    const gotoList = () => {
        window.location.href = '/receptek'; 
    }

    return (
        <div className="container mt-4">
            <h1>Welcome to the Home Page</h1>
            <p>Fedezd fel a recepteket!</p>
            <button className="btn btn-primary" onClick={gotoList}>
                Receptek megtekintése
            </button>
        </div>
    );
}

export default Home;

function Header(){
    return(
        <div className="Header">
            {/* <header> */}
                <h1>24Cinema</h1>
                <div className="Header_list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Comming up</a></li>
                        <li><a href="#">Playing Tonight</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            {/* </header> */}
        </div>
    );
}

export default Header
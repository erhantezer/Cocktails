

const Footer = () => {
    return (
        <>
            <footer className="">
                <div className="social-icons">
                    <a href="#twitter" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#facebook" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#instagram" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="#github" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="copyright">&copy; Copyright {new Date().getFullYear()}</div>
            </footer>
        </>
    )
}

export default Footer
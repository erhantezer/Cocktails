

const Footer = () => {
    
    return (
        <>
            <footer className="footer">
                <div className="social-icons">
                    <a href="https://twitter.com" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://facebook.com" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://instagram.com" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://github.com" rel="noopener noreferrer" target='true'>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <div className="copyright">Created By Erhan TEZER &copy; Copyright {new Date().getFullYear()}</div>
            </footer>
        </>
    )
}

export default Footer
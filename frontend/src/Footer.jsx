const Footer = () => {
    const currentDate = new Date();
    return(

        <footer className="Footer">
            <p > All reserved &copy; {currentDate.getFullYear()}</p>
        </footer>
    )
}
export default Footer;
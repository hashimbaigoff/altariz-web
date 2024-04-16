import "./footer.scss"
function Information() {
    return (
        <div className="container-footer">
            <div className="footer-content">
                <h4 className="heading-footer">Info</h4>
                <p className="footer-paragraph">Altariz solution pvt ltd We dream big
                    and explore the digital world with
                    a blue print to guide one path forward.</p>
            </div>
            <div>
                <h4 className="heading-footer">Address:</h4>
                <p className="footer-paragraph">Meat Market Street,Madanapalli,<br />
                    Annamaya District,<br />
                    Andhra Pradesh-517325.</p>
            </div>
            <div>
                <h4 className="heading-footer">For information Contact:</h4>
                <p className="footer-paragraph">
                    <img className="img-logo" src="./images/gmail.png" alt="logo" width="25px" height="25px" />hr@altarizsolutions.com
                </p>
            </div>
        </div>
    )
}

export default Information;
import access from '../assets/img/access.svg'
export function About(){
    return(
        <div className="access-denied">
            <img height={300} src={access}></img>
            <br></br> <br></br>
            Access Denied, Please contact Developer. 
            <footer class="footer  small text-center text-white-50">
                {/* <img className='image-logo' src={appLogo}></img> <br /><br /><br /> <br /><br /><br /> */}
                <div className="text-coder">
                <div><a href="tel:+91 9557044430">Webapp Designed and Developed by <span>4nku5h</span></a></div>
                    <div className="text-coder-phone">
                        <div>ankush.shrivastava98@gmail.com</div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
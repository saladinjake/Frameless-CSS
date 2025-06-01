import { withReadyComponentObserver } from "../../utils/withReadyComponent";

export const Footer = withReadyComponentObserver(({domReady }: {domReady: boolean}) => {
    if(!domReady) return <>Loading...</>

    return (
        
    <footer className="bg-light py-10 px-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-start">
                <div className="text-lg font-bold mb-2">
                    <img src="./img/svg/logo.svg" />

                </div>
                <p className="text-sm text-muted">© Copyright 2025. All Rights Reserved</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <a href="#">FAQs</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="flex gap-4 text-sm text-muted">
                <span>Support@wazo.io</span>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
    )
})
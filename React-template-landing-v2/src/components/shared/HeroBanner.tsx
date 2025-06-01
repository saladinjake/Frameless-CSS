import { withReadyComponentObserver } from "../../utils/withReadyComponent"


export const WazoHeroBanner =  withReadyComponentObserver
(({
    leadText = "Receive, spend, and transfer with stablecoins.",
    description = "Make transactions to anyone at any time. Track your transactions "
    , infoText = "In real-time, keep control of your finances with ease and confidence ",
    domReady=false
}) => {
       if(!domReady) return <>Loading...</>

    return (

        <section className="hero bg-white animate" data-animate="fade-in-up">
            <div className="container flex flex-col md:flex-row items-center py">

                <div className="md:w-1/2 text-center md:text-left" data-animate="fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{leadText}</h1>
                    <p className=" text-gray-600">{description}</p>
                    <p className="text-sm text-gray-600 mb-6">{infoText}</p>


                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative" data-animate="fade-in-up">
                    <div className="carousel">
                        <img src="./img/svg/hero.svg" />
                    </div>
                </div>
            </div>
        </section>

    )
})
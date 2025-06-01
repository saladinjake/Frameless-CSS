import { ReactNode } from "react"
import RemixedComponent from "./MixinComponents"
import { withReadyComponentObserver } from "../../utils/withReadyComponent"

export const WazoFeatures = withReadyComponentObserver(({ domReady =true }: { domReady: boolean }) => {
    return (
          <> {!domReady ? <>Loading...</> : (
                    <section className="features py-16">
                        <div className="container">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need not worry about</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="feature-card p-6 bg-white  hover:shadow-lg transition" data-animate="fade-in-up">
                                    <div className="icon w-12 h-12 mb-4 text-white  flex ">
                                        <img src="./img/svg/gear.svg" />

                                    </div>
                                    <h3 className="text-sm font-semibold mb-2">Fast & Reliable</h3>
                                    <p className="text-gray-600">Stay connected while you send funds
                                        to your friends and families from anywhere to everywhere.</p>
                                </div>
                                <div className="feature-card p-6 bg-white   hover:shadow-lg transition" data-animate="fade-in-up">
                                    <div className="iconz w-1 h-1 mb-4 text-white  flex ">
                                        <img src="./img/svg/chart.svg" />

                                    </div>
                                    <h3 className="text-sm font-semibold mb-2">Low Fee</h3>
                                    <p className="text-gray-600">We operate with no transaction
                                        fees, making payments affordable
                                        and accessible anytime, anywhere.</p>
                                </div>
                                <div className="feature-card p-6 bg-white   hover:shadow-lg transition" data-animate="fade-in-up">
                                    <div className="icon w-12 h-12 mb-4 text-white  flex ">
                                        <img src="./img/svg/lock.svg" />
                                    </div>
                                    <h3 className="text-sm font-semibold mb-2">Enhanced Encryption</h3>
                                    <p className="text-gray-600">Ensuring secure transactions involves fraud measures along with
                                        bank-grade encryption safeguards.</p>
                                </div>
                                <div className="feature-card p-6 bg-white   hover:shadow-lg transition" data-animate="fade-in-up">
                                    <div className="icon w-12 h-12 mb-4 text-white  flex ">
                                        <img src="./img/svg/diverse.svg" />
                                    </div>
                                    <h3 className="text-sm font-semibold mb-2">Diverse Payment System </h3>
                                    <p className="text-gray-600">Enjoy effortless access to funds from anywhere, transferred directly to
                                        your local bank.</p>
                                </div>
                            </div>
                        </div>
                    </section>
               
      
            )}
                </>


    )

})
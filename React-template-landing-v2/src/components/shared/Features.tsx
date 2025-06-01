import { withReadyComponentObserver } from "../../utils/withReadyComponent"


const FeatureCard = ({ title = "Fast & Reliable", text = `Stay connected while you send funds
                to your friends and families from anywhere to everywhere.`, icon = "./img/svg/gear.svg" }: { title: string; icon: string; text: string }) => {

    return (
        <div className="feature-card p-6 bg-white  hover:shadow-lg transition" data-animate="fade-in-up">
            <div className="icon w-12 h-12 mb-4 text-white  flex ">
                <img src={icon} />

            </div>
            <h3 className="text-sm font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </div>

    )
}
export const WazoFeatures = withReadyComponentObserver(({ domReady = true }: { domReady: boolean }) => {
    return (
        <> {!domReady ? <>Loading...</> : (
            <section className="features py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything you need not worry about</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <FeatureCard
                            title="Fast & Reliable"
                            text={`Stay connected while you send funds
                to your friends and families from anywhere to everywhere.`}
                            icon="./img/svg/gear.svg"
                        />


                        <FeatureCard
                            title="Low Fees"
                            text={`We operate with no transaction
                                fees, making payments affordable
                                and accessible anytime, anywhere.`}
                            icon="./img/svg/chart.svg"
                        />


                        
                        <FeatureCard
                            title="Enhanced Encryption"
                            text={`Ensuring secure transactions involves fraud measures along with
                                bank-grade encryption safeguards.`}
                            icon="./img/svg/lock.svg"
                        />
                        
                        <FeatureCard
                            title="Diverse Payment System"
                            text={`Enjoy effortless access to funds from anywhere, transferred directly to
                                your local bank.`}
                            icon="./img/svg/diverse.svg"
                        />
                    </div>
                </div>
            </section>


        )}
        </>


    )

})
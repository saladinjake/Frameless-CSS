import { withReadyComponentObserver } from "../../utils/withReadyComponent"


const ExtraFeaturesCard = ({ title = "Bank Graded Encryption", text = `Strong 256-bit end-to-end encryption for protecting your
                            transactions and data.`, icon = "./img/svg/encryption.svg" }: { title: string; icon: string; text: string }) => {

    return (
        <div className="card2 p-6 bg-gray-100 text-left shadow-sm rounded-lg">
            <div >
                <img
                    className="h-200 w-full bg-gray-100 mb-4 rounded-md"
                    src={icon} />
            </div>
            <h3 className="text-md font-bold mb-2"> {title}</h3>
            <p className="text-sm text-muted">{text}</p>
        </div>


    )
}
export const SecurityGrids = withReadyComponentObserver(({domReady }: {domReady: boolean}) => {
    if(!domReady) return <>Loading...</>
    return (
        <section className="bg-light py-16 text-center" data-animate="fade-in-up">
            <div className="container max-w-screen-lg mx-auto px-4">
                <p className="text-xs text-muted tracking-wide uppercase mb-3">SECURITY AND PRIVACY</p>
                <h2 className="text-xl font-semibold mb-12">
                    Wazo prioritizes data protection to safeguard customer account and transactions.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-animate="fade-in-up">
                    <ExtraFeaturesCard
                        title="Bank Graded Encryption"
                        text={`Strong 256-bit end-to-end encryption for protecting your
                            transactions and data.`}
                        icon="./img/svg/encryption.svg"
                    />
                    <ExtraFeaturesCard
                        title="Data Protected Transactions"
                        text={`Every transaction is private, secure, and fully traceable.`}
                        icon="./img/svg/protect.svg"
                    />

                    <ExtraFeaturesCard
                        title="Regulated Authorities"
                        text={`Our platform complies with top-grade regulators and
                            certifications.`}
                        icon="./img/svg/ndic.svg"
                    />

                </div>
            </div>
        </section>


    )
})
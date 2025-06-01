import { withReadyComponentObserver } from "../../utils/withReadyComponent";

const ServiceCard = ({ title = "Send & Receive Funds", text = `Send money to friends, receive funds, and store easily using
                            your Wazo account.`, icon = "./img/svg/sendmoney.svg" }: { title: string; icon: string; text: string }) => {

    return (
        <div className="card" data-animate="fade-in-up">
            <div className="w-200 h-200 center">
                <img src={icon} className="contain" />
            </div>

            <h3 className="text-md font-bold">{title}</h3>
            <p className="text-sm mt-2 text-muted">{text}</p>
        </div>
    )
}
export const Services = withReadyComponentObserver(({ domReady }: { domReady: false }) => {
    if (!domReady) return <>Loading...</>
    return (

        <section className="bg-dark text-white py-10">
            <div className="container">
                <h2 className="text-center text-2xl font-semibold mb-8">Everything you'll get on Wazo</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                    <ServiceCard
                        title="Send & Receive Funds"
                        text={`Send money to friends, receive funds, and store easily using
                            your Wazo account.`}
                        icon="./img/svg/sendmoney.svg"
                    />
                    <ServiceCard
                        title="Multi Pocket Wallet"
                        text={`Manage and separate your finances in your wallet, allowing
                            you to budget with ease.`}
                        icon="./img/svg/wallet.svg"
                    />
                    <ServiceCard
                        title="Express Bill Payment"
                        text={`Pay for your cable TV, electricity, internet, betting and
                            more with just one tap in the app.`}
                        icon="./img/svg/bill.svg"
                    />
                    <ServiceCard
                        title="Save & Earn"
                        text={`Grow your savings, avoid impulse debits, and earn interest
                            while spending smarter.`}
                        icon="./img/svg/save-and-earn.svg"
                    />
                </div>
            </div>
        </section>
    )
})
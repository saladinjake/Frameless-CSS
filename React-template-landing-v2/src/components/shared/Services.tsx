export const Services = () => {

    return (

        <section className="bg-dark text-white py-10">
            <div className="container">
                <h2 className="text-center text-lg font-semibold mb-8">Everything you'll get on Wazo</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                    <div className="card" data-animate="fade-in-up">
                        <div className="w-200 h-200 center">
                            <img src="./public/svg/sendmoney.svg" className="contain" />
                        </div>

                        <h3 className="text-md font-bold">Send & Receive Funds</h3>
                        <p className="text-sm mt-2 text-muted">Send money to friends, receive funds, and store easily using
                            your Wazo account.</p>
                    </div>
                    <div className="card" data-animate="fade-in-up">
                        <div className="w-200 h-200">
                            <img src="./public/svg/wallet.svg" className="contain ml-8" />
                        </div>
                        <h3 className="text-md font-bold">Multi Pocket Wallet</h3>
                        <p className="text-sm mt-2 text-muted">Manage and separate your finances in your wallet, allowing
                            you to budget with ease.</p>
                    </div>
                    <div className="card" data-animate="fade-in-up">

                        <div className="w-200 h-200">
                            <img src="./public/svg/bill.svg" className="contain ml-8" />
                        </div>
                        <h3 className="text-md font-bold">Express Bill Payment</h3>
                        <p className="text-sm mt-2 text-muted">Pay for your cable TV, electricity, internet, betting and
                            more with just one tap in the app.</p>
                    </div>
                    <div className="card" data-animate="fade-in-up">
                        <div className="w-200 h-200">
                            <img src="./public/svg/save-and-earn.svg" className="contain ml-8" />
                        </div>
                        <h3 className="text-md font-bold">Save & Earn</h3>
                        <p className="text-sm mt-2 text-muted">Grow your savings, avoid impulse debits, and earn interest
                            while spending smarter.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
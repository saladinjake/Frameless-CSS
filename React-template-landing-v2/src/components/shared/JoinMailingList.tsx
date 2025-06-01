import { withReadyComponentObserver } from "../../utils/withReadyComponent"

export const JoinMailingList = withReadyComponentObserver(({domReady }: {domReady: boolean}) => {
    if(!domReady) return <>Loading...</>

    return (
         <section className="bg-dark text-white py-16 px-4">
        <div className="container text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Ready to get more out of Wazo?</h2>
            <p className="text-sm text-muted mb-6">
                Make transactions to anyone at any time. Track your transactions in real-time, keep control of your
                finances with ease and confidence.
            </p>
            <div className="flex justify-center items-center gap-2 flex-wrap">
                <input type="email" placeholder="Your email address" className="input rounded-full px-6 py-2 text-dark" />
                <button className="btn btn-light rounded-full px-6 py-2 font-semibold">Join Waitlist</button>
            </div>
        </div>
    </section>
    )
})
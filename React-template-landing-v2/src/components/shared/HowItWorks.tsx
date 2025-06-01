import { withReadyComponentObserver } from "../../utils/withReadyComponent";

const LeadImage = ({ imgUrl }: { imgUrl: string }) => {

    return (

        <div className="text-center md:text-left">
            <img src={imgUrl} />

        </div>
    )
}

const EasyStepsCard = ({ title = "Download the app", text = `Get it on iOS and Android Playstore.`, step = "1" }: { title: string; step: string; text: string }) => {
    return (
        <li className="step shadow rounded" data-animate="fade-in-up">
            <span className="step-number">{step}</span>
            <div>
                <span className="font-bold">{title}</span>
                <p className="text-sm text-muted">{text}</p>
            </div>
        </li>

    )
}
export const HowItWorks = withReadyComponentObserver(({domReady }: {domReady: boolean}) => {
    if(!domReady) return <>Loading...</>
    return (
        <section className="bg-light py-14">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <LeadImage imgUrl={"./img/svg/how-it-works-phone.svg"} />

                <div>
                    <h3 className="text-lg font-semibold mb-6">How Wazo works in 4 easy steps</h3>
                    <ol className="space-y-5">

                        <EasyStepsCard
                            step="1"
                            title="Download the app"
                            text="Get it on iOS and Android Playstore."

                        />
                        <EasyStepsCard
                            step="2"
                            title="Create Account"
                            text="With your email address, first name and location open a
                                    secure Wazo account."

                        />
                        <EasyStepsCard
                            step="3"
                            title="Verify KYC"
                            text="Submit your valid identity details to validate your
                                    account opening."

                        />
                        <EasyStepsCard
                            step="4"
                            title="Start Transacting"
                            text="Transfer, receive, send money from Wazo to friends and
                                    families."

                        />
                    </ol>
                </div>
            </div>
        </section>

    )
})
import { withReadyComponentObserver } from "../../utils/withReadyComponent"

const Accordion = ({ title, content }: any) => {
 
  
    const toggleFaq = () => {
        const answer = document?.querySelector('.faq-answer');
        answer?.classList?.toggle('hidden');
    }
    return (

        <div className="bg-white rounded-lg shadow-sm p-2 mb-2 cursor-pointer card3" onClick={toggleFaq}>
            <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold">{title}</h3>
                <span className="text-muted">&#9662;</span>
            </div>
            <div className="faq-answer text-sm text-muted mt-2 hidden">
                {content}
            </div>
        </div>

    )
}
export const Faq = withReadyComponentObserver(({ domReady }: { domReady: boolean }) => {
    if (!domReady) return <>Loading...</>

    return (

        <section className="py-20 px-4 bg-light">
            <div className="container text-center">
                <p className="uppercase text-sm text-muted tracking-wide mb-2">Quick information</p>
                <h2 className="text-xl font-bold mb-10">Frequently Asked Questions</h2>

                <div className="grid gap-4 max-w-3xl mx-auto text-left">


                    <Accordion
                        title="What is Wazo?"
                        content={` Wazo is a secure digital wallet that allows you to manage, send, and receive digital assets easily.
                        `}
                    />
                    

                    <Accordion
                        title="How do I add funds to Wazo?"
                        content={` You can add funds by linking your bank account, credit card, or using local deposit partners.`}
                    />
                  

                    <Accordion
                        title="How can I access my wallet address?"
                        content={`Go to your wallet dashboard and click on “Receive” to see your unique wallet address.`}
                    />
                    <Accordion
                        title="Can I withdraw my funds to my local bank account?"
                        content={`Yes, Wazo supports direct withdrawals to linked local bank accounts.`}
                    />
                  <Accordion
                        title="Can I move funds from wallets?"
                        content={`    Yes, you can transfer funds between different wallets or addresses.
                        `}
                    />

                  <Accordion
                        title="Can I import an existing wallet?"
                        content={`Absolutely. Just use your recovery phrase or private key to import your wallet.
                        `}
                    />

                    
                </div>
            </div>
        </section>

    )
})
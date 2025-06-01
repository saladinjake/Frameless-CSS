import { withReadyComponentObserver } from "../../utils/withReadyComponent"

const LeadImage = ({ imgUrl }: { imgUrl: string }) => {

    return (

    <div className="h-64 bg-gray-100 rounded-lg">
            <img src={imgUrl} />

        </div>
    )
}
export const StableCoinInformation  = withReadyComponentObserver(({domReady }: {domReady: boolean}) => {
    if(!domReady) return <>Loading...</>
    return (
        
<section className="bg-white py-20" data-animate="fade-in-up">
  <div className="container max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <LeadImage imgUrl="./img/svg/encryption.svg"/>
    
    <div>
      <p className="text-xs text-muted tracking-wide uppercase mb-2">MOVE DIGITALLY</p>
      <h2 className="text-xl font-semibold mb-4">Stablecoins to cash</h2>
      <p className="text-sm text-muted mb-6">
        You can easily convert your cryptocurrencies into local currency and spend with friends and family.
      </p>
      <ol className="list-decimal text-sm text-muted space-y-2 pl-5">
        <li>Choose the type of stablecoin to send</li>
        <li>Provide your wallet or account</li>
        <li>Choose preferred local bank or kiosk</li>
      </ol>
    </div>
  </div>
</section>


    )
})
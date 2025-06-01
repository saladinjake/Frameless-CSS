import { Fragment } from "react"
import { WazoHeaderBranding } from "../../components/shared/Nav"
import { WazoHeroBanner } from "../../components/shared/HeroBanner"
import { WazoFeatures } from "../../components/shared/Features"

const HomeModule = () => {
  return (
    <Fragment>
      <WazoHeaderBranding />
      <WazoHeroBanner
        leadText="Receive, spend, and transfer with stablecoins."
        description="Make transactions to anyone at any time. Track your transactions "
        infoText="In real-time, keep control of your finances with ease and confidence " />
        <WazoFeatures/>
    </Fragment>

  )
}

export default HomeModule
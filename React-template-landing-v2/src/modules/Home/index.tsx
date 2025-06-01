import { Fragment, useLayoutEffect } from "react"
import { WazoHeaderBranding } from "../../components/shared/Nav"
import { WazoHeroBanner } from "../../components/shared/HeroBanner"
import { WazoFeatures } from "../../components/shared/Features"
import { Services } from "../../components/shared/Services"
import { HowItWorks } from "../../components/shared/HowItWorks"
import { SecurityGrids } from "../../components/shared/SecurityGrids"
import { StableCoinInformation } from "../../components/shared/StableCoin"
import { Faq } from "../../components/shared/FAQs"
import { JoinMailingList } from "../../components/shared/JoinMailingList"
import { Footer } from "../../components/shared/Footer"
const HomeModule = () => {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  }, [])
  return (
    <Fragment>
      <WazoHeaderBranding />
      <WazoHeroBanner
        leadText="Receive, spend, and transfer with stablecoins."
        description="Make transactions to anyone at any time. Track your transactions "
        infoText="In real-time, keep control of your finances with ease and confidence " />
      <WazoFeatures />
      <Services />
      <HowItWorks />
      <SecurityGrids />
      <StableCoinInformation />
      <Faq />
      <JoinMailingList />
      <Footer />
    </Fragment>

  )
}

export default HomeModule
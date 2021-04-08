import { Box, Button, Heading, Image, Text } from "grommet"
import { Next as NextIcon, Previous as PreviousIcon } from "grommet-icons"
import { useKeenSlider } from "keen-slider/react"
import { BaseSectionProps } from "./BaseSectionProps"
import bahujanLogoUrl from "./images/partners/bahujan-samajik-trust-logo.jpg"
import deepalayaLogoUrl from "./images/partners/deepalaya-logo.jpg"
import gujaratSealUrl from "./images/partners/gujarat-seal.jpg"
import punjabSealUrl from "./images/partners/punjab-seal.jpg"
import sahyogLogo from "./images/partners/sahyog-trust-logo.jpg"
import sparshaTrustLogoUrl from "./images/partners/sparsha-trust-logo.jpg"
import SectionContainer from "./SectionContainer"

type Partner = {
  name: string
  imageUrl: string
  maxWidth?: number
}

const partners: Array<Partner> = [
  {
    name: "Goverment of Punjab",
    imageUrl: punjabSealUrl,
    maxWidth: 150,
  },
  {
    name: "Goverment of Gujarat",
    imageUrl: gujaratSealUrl,
    maxWidth: 150,
  },
  {
    name: "Deepalaya",
    imageUrl: deepalayaLogoUrl,
  },
  {
    name: "Bahujan Samajik Trust",
    imageUrl: bahujanLogoUrl,
  },
  {
    name: "Sparsha Trust",
    imageUrl: sparshaTrustLogoUrl,
  },
  {
    name: "Sahyog Charitable Trust",
    imageUrl: sahyogLogo,
  },
]

const OurPartnersSection = (props: BaseSectionProps) => {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 2,
    loop: true,
  })

  return (
    <SectionContainer flex="grow" background="white">
      <Box fill style={{ maxWidth: 1600 }} alignSelf="center">
        <Box direction="column" fill="horizontal" align="start" pad={{ horizontal: "large" }}>
          <Heading level="2">Our Partners</Heading>
        </Box>
        <Box height="20px" />
        <Box style={{ position: "relative" }}>
          <Box pad={{ horizontal: "40px" }}>
            <div ref={ref} className="keen-slider">
              {partners.map((partner) => (
                <div className="keen-slider__slide" key={partner.name}>
                  <Box direction="row" justify="center" align="end" fill>
                    <Box direction="column" pad="medium">
                      <Image
                        alignSelf="center"
                        src={partner.imageUrl}
                        fit="contain"
                        width="100%"
                        height="auto"
                        style={{ maxWidth: partner.maxWidth ?? 250 }}
                      />
                      <Box>
                        <Text textAlign="center" size="large">
                          {partner.name}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </div>
              ))}
            </div>
          </Box>

          {/* navigation */}
          <Button
            style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)" }}
            onClick={() => slider.prev()}
          >
            <PreviousIcon size={props.isMobileLayout ? "medium" : "large"} />
          </Button>
          <Button
            style={{ position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)" }}
            onClick={() => slider.next()}
          >
            <NextIcon size={props.isMobileLayout ? "medium" : "large"} />
          </Button>
        </Box>
      </Box>
    </SectionContainer>
  )
}

export default OurPartnersSection

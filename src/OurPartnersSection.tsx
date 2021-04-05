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

const partners = [
  {
    name: "Goverment of Punjab",
    imageUrl: punjabSealUrl,
  },
  {
    name: "Goverment of Gujarat",
    imageUrl: gujaratSealUrl,
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
        <Box direction="column" fill="horizontal" align="start">
          <Heading level={2} margin="0">
            Our Partners
          </Heading>
        </Box>
        <Box height="20px" />
        <Box style={{ position: "relative" }}>
          <Box pad={{ horizontal: "40px" }}>
            <div ref={ref} className="keen-slider">
              {partners.map(({ imageUrl, name }) => (
                <div className="keen-slider__slide" key={name}>
                  <Box justify="center" align="center" fill>
                    <Box direction="column" pad="medium">
                      <Image src={imageUrl} fit="contain" style={{ maxWidth: 250 }} />
                      <Box>
                        <Text textAlign="center" size="large">
                          {name}
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

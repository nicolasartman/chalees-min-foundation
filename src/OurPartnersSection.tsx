import { Box, Heading, Image, Text } from "grommet"
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
  const [ref] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 2,
    loop: true,
  })

  return (
    <SectionContainer flex="grow" background="white">
      <Box fill pad={{ horizontal: "40px" }} style={{ maxWidth: 1600 }} alignSelf="center">
        <Box direction="column" fill="horizontal" align="start">
          <Heading level={2} margin="0">
            Our Partners
          </Heading>
        </Box>
        <Box height="20px" />
        <Box height="300px">
          <div ref={ref} className="keen-slider">
            {partners.map(({ imageUrl, name }) => (
              <div className="keen-slider__slide" key={name}>
                <Box justify="center" align="center" fill>
                  <Box direction="column" pad="medium">
                    <Image src={imageUrl} fit="contain" />
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
      </Box>
    </SectionContainer>
  )
}

export default OurPartnersSection

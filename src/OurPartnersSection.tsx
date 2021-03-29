import { Box, Heading, Image, Text } from "grommet"
import { BaseSectionProps } from "./BaseSectionProps"
import bahujanLogoUrl from "./images/partners/bahujan-samajik-trust-logo.jpg"
import deepalayaLogoUrl from "./images/partners/deepalaya-logo.jpg"
import gujaraSealUrl from "./images/partners/gujara-seal.jpg"
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
    name: "Goverment of Punjab",
    imageUrl: gujaraSealUrl,
  },
  {
    name: "Sahyog Charitable Trust",
    imageUrl: sahyogLogo,
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
]

const OurPartnersSection = (props: BaseSectionProps) => (
  <SectionContainer flex="grow" background="white">
    <Box fill pad={{ horizontal: "40px" }} style={{ maxWidth: 1600 }} alignSelf="center">
      <Box direction="column" fill="horizontal" align="start">
        <Heading level={2} margin="0">
          Our Partners
        </Heading>
      </Box>
      <Box height="20px" />
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: props.isMobileLayout ? "1fr 1fr" : "1fr 1fr 1fr",
          rowGap: 40,
          columnGap: 80,
        }}
      >
        {partners.map(({ name, imageUrl }) => (
          <Box
            direction="column"
            justify="end"
            gap="medium"
            flex="grow"
            style={{
              maxWidth: 250,
            }}
          >
            <Image src={imageUrl} />
            <Box>
              <Text textAlign="center" size="large">
                {name}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </SectionContainer>
)

export default OurPartnersSection

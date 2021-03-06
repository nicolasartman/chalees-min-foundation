import { base, Box, Grommet, ResponsiveContext, ThemeType } from "grommet"
import { deepMerge } from "grommet/utils"
import { almostWhite, red } from "./colors"
import { headerHeight } from "./constants"
import ContactUsSection from "./ContactUsSection"
import ExploreQuestionsSection from "./ExploreQuestionsSection"
import HeroBanner from "./HeroBanner"
import HowWeWorkSection from "./HowWeWorkSection"
import MobileHeroBanner from "./MobileHeroBanner"
import Navigation from "./Navigation"
import OurPartnersSection from "./OurPartnersSection"
import OurTrainingAndAssessmentSection from "./OurTrainingAndAssessmentSection"
import OurValuesSection from "./OurValuesSection"
import TeacherTestimonialsSection from "./TeacherTestimonialsSection"

const theme = deepMerge<ThemeType, ThemeType>(base, {
  global: {
    colors: {
      background: almostWhite,
      brand: red,
      accent: red,
      focus: {
        dark: "rgba(255, 255, 255, 0.3)",
        light: "rgba(255, 255, 255, 0.3)",
      },
    },
    font: {
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, ' +
        'Ubuntu, Cantarell,"Helvetica Neue",sans-serif;',
      size: "18px",
    },
    breakpoints: {
      mediumSmall: {
        value: 1200,
      },
    },
  },
  heading: {
    extend: [
      {
        margin: 0,
      },
    ],
  },
})

const App = () => {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => {
          const isMobileLayout = size === "mediumSmall" || size === "small"

          return (
            <Box fill>
              {/* Header */}
              <Box
                fill="horizontal"
                direction="column"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: headerHeight,
                  zIndex: 1,
                }}
              >
                <Navigation isMobileLayout={isMobileLayout} />
              </Box>

              {isMobileLayout ? <MobileHeroBanner /> : <HeroBanner />}

              <HowWeWorkSection isMobileLayout={isMobileLayout} />

              {/* <SelectedQuestionsSection isMobileLayout={isMobileLayout} /> */}

              <ExploreQuestionsSection size={size} isMobileLayout={isMobileLayout} />

              <OurTrainingAndAssessmentSection isMobileLayout={isMobileLayout} />

              <TeacherTestimonialsSection isMobileLayout={isMobileLayout} />

              <OurValuesSection isMobileLayout={isMobileLayout} />

              <OurPartnersSection isMobileLayout={isMobileLayout} />

              <ContactUsSection isMobileLayout={isMobileLayout} />
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}

export default App

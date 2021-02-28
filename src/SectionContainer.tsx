import { Box, BoxTypes } from "grommet"

const SectionContainer: React.FC<BoxTypes> = ({ children, ...props }) => (
  <Box fill="horizontal" direction="column" pad={{ vertical: "large" }} {...props}>
    {children}
  </Box>
)

export default SectionContainer

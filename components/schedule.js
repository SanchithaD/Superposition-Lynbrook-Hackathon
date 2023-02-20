import styled from "@emotion/styled";
import { Box, Text, Image } from "rebass";
import { useColorMode } from "theme-ui";
import theme from "./theme";

const Schedule = ({ src, alt, showAlt, wide, ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Box
      {...props}
      variant="sheet"
      sx={{
        p: 0,
        height: '90%',
        minHeight: ['18rem', '20rem', '24rem'],
        position: 'relative',
        maxWidth: '100%',
        gridColumn: [null, wide ? 'span 2' : null],
        ...props.sx
      }}
    >
      <Image
        src="https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/Screenshot%202023-02-19%20at%2011.18.29%20AM.png?v=1676834330685"
        alt={alt}
        loading="lazy"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  )
}

export default Schedule;

import { Box, Button, Flex, Link } from 'rebass'


export const Banner = props => (
//   <Box
//     sx={{
//       bg: '#ee736f',
//       color: 'white',
//       fontFamily: 'Segoe UI',
//       textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
//       py: [4, 5, 6, 7],
//       mb: [4, 5],
//       alignItems: 'center'

//     }}
//   >
      <Box
    sx={{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,0.375)), url(https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/hackathon.jpg?v=1673859727933)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
      py: [4, 5, 6, 7],
      mb: [4, 5]
    }}
  >
    <Box
      {...props}
      variant="container"
      sx={{
        maxWidth: 'wide',
        textAlign: 'center',
        h1: {
          fontSize: [5, 6, 7],
          lineHeight: 'tight',
            fontFamily: 'Orbitron',
          mt: [0, -2, -4, -5],
          mb: 3
        },
        h2: {
          fontSize: [2, 3, 4],
          fontFamily: 'Segoe UI',
          lineHeight: 'body',
          fontWeight: 'body',
          mb: 2,
          a: {
            color: 'red'
          }
        },
        p: {
          mb: 4
        },
        ul: {
          listStyle: 'none',
          display: 'flex',
          p: 0,
          m: 0
        },
        li: {
          mr: 3
        },
          a: {
          color: '#9095FF'
          }
      }}
    />
    <Flex
      sx={{
          justifyContent: 'center'
      }}
      >
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1DEbubNqh09iQRWj_kjQV6Eu-UReVOi6SZOOFJeGbebHlZQ/viewform?pli=1">
        <Button
          sx={{
          bg: '#F6B265',
          color: 'white',
          fontFamily: 'Segoe UI'          
          }}>Register</Button>
      </Link>
    </Flex>
  </Box>
)

 
export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container',
      h2: {
        fontSize: [3, 4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [2, 3, 4],
        mt: [3, 4],
        mb: [2, 3],
      },
        a: {
          color: '#5F65F5',
        textDecoration: 'none'
        },
          p: {
            fontSize: [1, 2],
              fontFamily: 'Segoe UI'
          },
      ...props.sx
    }}
  />
)

export const Callout = props => (
  <Box
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      mb: [4, 5],
      h2: {
        fontFamily: 'Segoe UI',
        lineHeight: 'body',
        fontWeight: 'body',
        mb: 2},
        fontSize: [2, 3],
      ...props.sx
    }}
  />
)

export const Venue = props => (
//   <Box
//     {...props}
//     sx={{
//       bg: 'elevated',
//       px: [3, 4],
//       py: [2, 3, 4],
//       borderRadius: 'extra',
//       boxShadow: 'sheet',
//       mb: [4, 5],
//       h2: {
//         fontFamily: 'Segoe UI',
//         lineHeight: 'body',
//         fontWeight: 'body',
//         mb: 2},
//         fontSize: [1, 2],
//       ...props.sx
//     }}>
 
//     <Flex
//       sx={{
//           justifyContent: 'center'
//       }}
//       >
//       <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1DEbubNqh09iQRWj_kjQV6Eu-UReVOi6SZOOFJeGbebHlZQ/viewform?pli=1">
//         <Button
//           sx={{
//           bg: '#F6B265', 
//           color: 'white',
//           fontFamily: 'Segoe UI',
//           mt: '1rem'
//           }}>Register</Button>
//       </Link>
//     </Flex>
       <Box
    sx={{
      backgroundImage:
        'url(https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/Screenshot%202023-01-30%20at%2012.15.57%20AM.png?v=1675066628556)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
      py: [4, 5, 6, 7],
      mb: [4, 5]
    }}
  >
  </Box>
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'flex',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: '#B616D6',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)
export const Gallery = props => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', null, 'repeat(2, 1fr)'],
      gridGap: [3, 4, null, 5],
      width: '100%',
      px: [3, 4, null, 5],
      mb: [3, 4, 5, 6],
      'ul, ol': {
        textAlign: [null, 'right'],
        listStyle: 'none',
        pl: 0
      },
      'p, ol, ul': {
        maxWidth: 1080 / 2,
        p: [3, 4]
      },
      'p, li': {
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontSize: [2, 3],
        mt: 0,
        mb: 2
      },
      ...props.sx
    }}
  />
)

export const Team = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'flex',
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-child': {
          lineHeight: 0
        }
      },
      strong: {
        fontSize: [1, 2]
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: '#5F65F5'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        objectFit: 'cover',
        objectPosition: 'center',
        width: [100, 100],
        height: [100, 100],
        mr: 3
      },
      ...props.sx
    }}
  />
)

export const Judges = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'flex',
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-child': {
          lineHeight: 0
        }
      },
      strong: {
        fontSize: [1, 2]
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: '#5F65F5'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        objectFit: 'cover',
        objectPosition: 'center',
        width: [100, 100],
        height: [100, 100],
        mr: 3
      },
      ...props.sx
    }}
    
  />
)

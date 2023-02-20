import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.global/802b43f3-c1b5-4932-9180-30a8d74c1804/Copy%20of%20%5BMASTER%20COPY%5D%20Superposition%20Logo.jpeg?v=1670828168170`}
    alt="Superposition avatar"
    width={size}
    height={size}
  />
)

import { Terminal } from 'react-feather'
import styled from 'styled-components'
import { lightTheme } from 'theme/colors'

import darkArrowImgSrc from './images/aboutArrowDark.png'
import lightArrowImgSrc from './images/aboutArrowLight.png'
import darkTerminalImgSrc from './images/aboutTerminalDark.png'
import hors from './images/hors.png'
import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/swap',
    title: 'Swap tokens',
    description: 'Buy, sell, and explore tokens on Pharos Network.',
    cta: 'Trade Tokens',
    darkBackgroundImgSrc: swapCardImgSrc,
    lightBackgroundImgSrc: swapCardImgSrc,
  },
]

const StyledCardLogo = styled.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`

export const MORE_CARDS = [
  {
    to: '/WhatIsZentraswap',
    title: 'Zentraswap?',
    description: 'Read more about this high-capital efficiency, AMM-based DEX and launchpad built to support the Pharos Network ecosystem.',
    lightIcon: <StyledCardLogo src={hors} alt="What is Zentraswap?" />,
    darkIcon: <StyledCardLogo src={hors} alt="What is Zentraswap?" />,
    cta: 'Read more',
  },
  {
    to: '/pools',
    title: 'Earn',
    description: 'Provide liquidity to pools on Uniswap and earn fees on swaps.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Analytics" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Analytics" />,
    cta: 'Provide liquidity',
  },
  {
    to: 'https://zentrafi.vercel.app/',
    external: true,
    title: 'Launch your tokens?',
    description: 'Create, launch and raise funds for your tokens effortlessly with our no-code token launchpad.',
    lightIcon: <Terminal color={lightTheme.neutral3} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Developers" />,
    cta: 'Launch now!',
  },
]

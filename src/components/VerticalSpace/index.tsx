import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Container = styled.div<{
  height?: number
  heightString?: string
  mobileHeight?: number
  mobileHeightString?: string
}>`
  ${({ height, heightString, mobileHeight, mobileHeightString }) => css`
    height: ${mobileHeight !== undefined || mobileHeightString !== undefined
      ? mobileHeightString
        ? mobileHeightString
        : `${mobileHeight}px`
      : heightString
      ? heightString
      : `${height || 0}px`};

    @media only screen and (min-width: 1024px) {
      height: ${heightString ? heightString : `${height || 0}px`};
    }
  `}
`

interface VerticalSpaceProps {
  height?: number
  heightString?: string
  mobileHeight?: number
  mobileHeightString?: string
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({
  height,
  heightString,
  mobileHeight,
  mobileHeightString,
}) => {
  return (
    <Container
      height={height}
      heightString={heightString}
      mobileHeight={mobileHeight}
      mobileHeightString={mobileHeightString}
    />
  )
}

export default VerticalSpace

export const ImageContainerUI = styled('div')`
  display: block;
  position: relative;
  width: 100%;
`

export const ImageUI = styled('img')`
  ${({ align }) => {
    if (align === 'center') {
      return `
        margin-left: 50%;
        transform: translateX(-50%);
    `
    }
  }}
`

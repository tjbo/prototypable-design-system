import getSpaceAfter from '../../utils/getSpaceAfter'

export const AspectRatioUI = styled('div')`
  /* Position child elements relative to this element */
  position: relative;

  /* Create a pseudo element that uses padding-bottom to take up space */
  &:after {
    display: block;
    content: '';
    /*  aspect ratio */
    padding-bottom: ${({ aspectRatio }) => aspectRatio + '%'};
  }

  /* Image is positioned absolutely relative to the parent element */
  img {
    /* Image should match parent box size */
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    min-height: 100%;
  }
  margin-bottom: ${getSpaceAfter};
`

export const ImgUI = styled('img')`
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  margin-bottom: ${getSpaceAfter};
  object-fit: cover;
`

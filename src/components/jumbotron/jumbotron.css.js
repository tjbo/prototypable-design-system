import styled from 'styled-components'
import config, { makePixelValue } from '../../config'

export const BottomBannerUI = styled('p')`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  padding: ${config.unit(0.25)};
  width: 100%;
`

const CallToAction = styled('div')`
  color: #fff;
  font-family: ${config.fonts.font2};
  font-size: ${config.unit(1.5)};
  line-height: 1.125;
  margin: 0;
  text-align: center;
  text-shadow: 2px 2px #333;
`

export const CallToAction1UI = styled(CallToAction)``

export const CallToAction2UI = styled(CallToAction)`
  font-size: ${config.unit(1)};
`

export const ContentUI = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - ${config.layout.desktop.headerHeight});
  position: absolute;
  top: ${config.unit(2.25)};
  width: 100%;
`

export const IntroUI = styled('div')`
  color: #000;
  display: flex;
  flex: 2;
  flex-direction: column;
  font-size: ${config.unit(0.88)};
  line-height: 1.5;
  justify-content: space-around;
  text-align: left;
  text-shadow: 2px 2px #222;
  font-weight: 600;
  font-family: ${config.fonts.font1};
  font-weight: 700;
`

export const Intro2UI = styled('div')`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: ${config.unit(0.88)};
  line-height: 1.5;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: left;
  text-shadow: 2px 2px 3px #000;
  font-weight: 600;
  font-family: ${config.fonts.font3};
  font-weight: 700;
`

export const ButtonsUI = styled('div')`
  min-width: 600px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around;
`

export const JumbotronBackgroundUI = styled('div')`
  display: block;
  height: calc(100vh - ${config.layout.desktop.headerHeight});
  line-height: 1.5;

  /* background-image: linear-gradient(
      rgba(0, 144, 231, 0.75),
      rgba(0, 144, 231, 0.75)
    ),
    url('https://images.unsplash.com/photo-1520020324516-dba91274d8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80');
  background-blend-mode: overlay; */

  /* background-image: linear-gradient(rgba(0, 144, 231, 0), rgba(0, 144, 231, 0)),
    url('https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
  /* background-image: url('https://media.istockphoto.com/photos/beautiful-sunset-of-los-angeles-downtown-skyline-and-palm-trees-in-picture-id884384784?s=2048x2048'); */

  /* background-image: url('https://images.unsplash.com/photo-1576694541627-114e57070466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
  /* background-position: center bottom; */

  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center -100px;

  /* background-image: url('https://images.unsplash.com/photo-1528656053220-4e535d66150d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */
  /* background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'); */

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -100px;
  position: relative;
  width: 100%;

  @media (max-width: ${makePixelValue(config.breakPoints.tablet)}) {
    background-position: center center;
  }
  /* -webkit-filter: blur(2px); */
  /* filter: blur(2px); */
`

export const JumbotronContentUI = styled('div')`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0;
  position: relative;
  width: 100%;
  border: 1px solid red;

  ${IntroUI} {
    margin: ${config.unit(1.5)};
    margin-bottom: 0;
  } */
`

export const TitleUI = styled('h1')`
  font-family: ${config.fonts.font2};
  font-size: ${config.unit(2)};
  line-height: 1;
  margin-bottom: -${config.unit(1)};
  text-align: center;
`
export const SubTitleUI = styled('div')`
  font-family: ${config.fonts.font2};
  font-size: ${config.unit(1.5)};
  font-weight: 700;
  line-height: 1.125;
  margin-bottom: ${config.unit(0.25)};
  margin-top: 0.25em;
  text-align: center;
`

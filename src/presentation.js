// Import React
import React from "react";
import styled from "@emotion/styled";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Layout,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const DotLessItem = styled(ListItem)`
  list-style-type: none;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  color: #0f2944;
`;

const theme = createTheme(
  {
    primary: "#FFF",
    secondary: "#0F2944",
    tertiary: "#4DD1DC",
    quaternary: "#F0F4FB"
  },
  {
    primary:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    secondary:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Natives in Tech
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Building Open Source Applications that Empower Native Communities
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 24px 0">
            Made with ❤️ and
          </Heading>
          <List textAlign="center">
            <DotLessItem>
              <StyledLink href="https://formidable.com/open-source/spectacle/">
                ✨ spectacle
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://firebase.google.com/">
                🔥 firebase
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://facebook.github.io/create-react-app/">
                👾 create-react-app
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">
            Story Time
          </Heading>
          <Text textColor="tertiary" margin="24px 0 0">
            Who is Me? 👨🏻‍💻
          </Text>
        </Slide>
        <Slide>
          <List textColor="secondary" textAlign="center">
            <DotLessItem>🐻 Half Muscogee / 🍁 Half Canadian </DotLessItem>
            <DotLessItem>💻 FE Software Engineer at SimSpace</DotLessItem>
            <DotLessItem>✨ Open Source Contributor</DotLessItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Open Source Technology
          </Heading>
          <List>
            <DotLessItem>✊ Giving rights to users</DotLessItem>
            <DotLessItem>📈 Linux has over 12,000 contributors</DotLessItem>
            <DotLessItem>
              ☁ GitHub hosts over 100,000,000 repositories
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>Story Time</Heading>
          <Text margin="24px 0 0">How did I start coding? 👨🏻‍💻</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            What I Use 🧰
          </Heading>
          <List>
            <DotLessItem>
              <StyledLink href="https://reactjs.org/" textColor="tertiary">
                ⛱ React
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                href="https://reasonml.github.io/"
                textColor="tertiary"
              >
                🧩 ReasonML
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.netlify.com/" textColor="tertiary">
                🛫 Netlify
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            What is Natives in Tech? 🤔
          </Heading>
          <Text
            textColor="secondary"
            margin="24px 0 0"
            style={{ lineHeight: 1.5 }}
          >
            Natives in Tech is a coalition of Native and non-Native developers
            building Native-centric applications using open source technologies
            👩🏽‍💻👨🏻‍💻👩🏼‍💻👨🏾‍💻
          </Text>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Projects</Heading>
          <List>
            <DotLessItem>
              <StyledLink href="http://obxlabs.net/olelo-programming/">
                🍍 Writing C# in Hawaiian
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://native-land.ca/">
                🗺 Mapping Traditional Native Territories
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="http://turing.iimas.unam.mx/wix/">
                🤖 Native Language Translation using Machine Learning
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.lavieencode.net/">
                👩🏽‍🏫 Web Development Training
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.amazonteam.org/terrastories/">
                🌴 Amazonian Story Telling through Offline Maps
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            Why Open Source
          </Heading>
          <Text
            margin="32px 0 0"
            textColor="secondary"
            style={{ lineHeight: 1.5 }}
          >
            Taking something from the outside world and making it our own 🙌
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Let's Stay Connected 🤝
          </Heading>
          <List textAlign="center">
            <DotLessItem>
              <StyledLink textColor="primary" href="https://nativesintech.org/">
                🌍 NativesInTech.org
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                textColor="primary"
                href="https://twitter.com/nativesintech"
              >
                🐦 Twitter
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                textColor="primary"
                href="https://github.com/nativesintech"
              >
                🐙 GitHub
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Any Questions???</Heading>
        </Slide>
      </Deck>
    );
  }
}

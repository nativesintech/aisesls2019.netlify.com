// Import React
import React from "react";
import styled from "@emotion/styled";

// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Slide, Text, Link } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const DotLessItem = styled(ListItem)`
  list-style-type: none;
  margin: 20px 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.textColor || "secondary"};
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
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            and
          </Heading>
          <StyledLink
            textSize={64}
            href="https://formidable.com/open-source/spectacle/"
          >
            <span role="img" aria-label="stars">
              ✨
            </span>{" "}
            spectacle,{" "}
          </StyledLink>
          <StyledLink textSize={64} href="https://firebase.google.com/">
            <span role="img" aria-label="plane taking off">
              🛫
            </span>{" "}
            netlify,{" "}
          </StyledLink>
          <StyledLink
            textSize={64}
            href="https://facebook.github.io/create-react-app/"
          >
            and
            <span role="img" aria-label="computer">
              {" "}
              🖥
            </span>
            &nbsp;create-react-app
          </StyledLink>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">
            Story Time
          </Heading>
          <Text textColor="tertiary" margin="24px 0 0">
            Who is me?
            <span role="img" aria-label="person on computer">
              {" "}
              👨🏻‍💻
            </span>
          </Text>
        </Slide>
        <Slide>
          <List textColor="secondary" textAlign="center">
            <DotLessItem>
              <span role="img" aria-label="bear">
                🐻
              </span>{" "}
              Half Muscogee /{" "}
              <span role="img" aria-label="maple leaf">
                🍁
              </span>{" "}
              Half Canadian{" "}
            </DotLessItem>
            <DotLessItem>
              <span role="img" aria-label="computer">
                💻
              </span>{" "}
              FE Software Engineer at SimSpace
            </DotLessItem>
            <DotLessItem>
              <span role="img" aria-label="stars">
                ✨
              </span>{" "}
              Open Source Contributor
            </DotLessItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Open Source Technology
          </Heading>
          <List>
            <DotLessItem>
              <span role="img" aria-label="fist">
                ✊
              </span>{" "}
              Giving rights to users
            </DotLessItem>
            <DotLessItem>
              <span role="img" aria-label="chart">
                📈
              </span>{" "}
              Linux has over 12,000 contributors
            </DotLessItem>
            <DotLessItem>
              <span role="img" aria-label="cloud">
                ☁
              </span>{" "}
              GitHub hosts over 100,000,000 repositories
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>Story Time</Heading>
          <Text margin="24px 0 0">
            How did I start coding?
            <span role="img" aria-label="person on computer">
              {" "}
              👨🏻‍💻
            </span>
          </Text>
        </Slide>
        <Slide>
          <img
            height={400}
            width="auto"
            alt="kermit the frog typing"
            src="https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            What I Use 🧰
          </Heading>
          <List>
            <DotLessItem>
              <StyledLink href="https://reactjs.org/" textColor="tertiary">
                <span role="img" aria-label="beach umbrella">
                  ⛱
                </span>{" "}
                React
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                href="https://reasonml.github.io/"
                textColor="tertiary"
              >
                <span role="img" aria-label="puzzle piece">
                  🧩
                </span>{" "}
                ReasonML
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.netlify.com/" textColor="tertiary">
                <span role="img" aria-label="plane take off">
                  🛫
                </span>{" "}
                Netlify
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            What is Natives in Tech?
            <span role="img" aria-label="thinking face">
              {" "}
              🤔
            </span>
          </Heading>
          <Text
            textColor="secondary"
            margin="24px 0 0"
            style={{ lineHeight: 1.5 }}
          >
            Natives in Tech is a coalition of Native and non-Native developers
            building Native-centric applications using open source technologies
            <span role="img" aria-label="people on computers">
              👩🏽‍💻👨🏻‍💻👩🏼‍💻👨🏾‍💻
            </span>
          </Text>
        </Slide>
        <Slide>
          <img
            height={400}
            width="auto"
            alt="mind blown"
            src="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="primary">Projects</Heading>
          <List>
            <DotLessItem>
              <StyledLink href="http://obxlabs.net/olelo-programming/">
                <span role="img" aria-label="pineapple">
                  🍍
                </span>{" "}
                Re-writing C# in Hawaiian
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://native-land.ca/">
                <span role="img" aria-label="map">
                  🗺
                </span>{" "}
                Mapping traditional native territories
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="http://turing.iimas.unam.mx/wix/">
                <span role="img" aria-label="robot">
                  🤖
                </span>{" "}
                Native language translation using machine learning
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.lavieencode.net/">
                <span role="img" aria-label="lady on computer">
                  👩🏽‍🏫
                </span>{" "}
                Web development training
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://www.amazonteam.org/terrastories/">
                <span role="img" aria-label="palm tree">
                  🌴
                </span>{" "}
                Amazonian story telling through offline maps
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink href="https://nativeamericanmascotdatabase.com/database/">
                <span role="img" aria-label="mask">
                  👺
                </span>{" "}
                Mascot database
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">
            Why Open Source?
          </Heading>
          <Text
            margin="32px 0 0"
            textColor="secondary"
            style={{ lineHeight: 1.5 }}
          >
            Taking something from the outside world and making it our own
            <span role="img" aria-label="hands raised">
              {" "}
              🙌
            </span>
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Let's Stay Connected
            <span role="img" aria-label="handshake">
              {" "}
              🤝
            </span>
          </Heading>
          <List textAlign="center">
            <DotLessItem>
              <StyledLink textColor="primary" href="https://nativesintech.org/">
                <span role="img" aria-label="globe">
                  🌍
                </span>{" "}
                NativesInTech.org
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                textColor="primary"
                href="https://twitter.com/nativesintech"
              >
                <span role="img" aria-label="bird">
                  🐦
                </span>{" "}
                Twitter
              </StyledLink>
            </DotLessItem>
            <DotLessItem>
              <StyledLink
                textColor="primary"
                href="https://github.com/nativesintech"
              >
                <span role="img" aria-label="octopus">
                  🐙
                </span>{" "}
                GitHub
              </StyledLink>
            </DotLessItem>
          </List>
        </Slide>
        <Slide>
          <img
            src="https://media.giphy.com/media/3oriO5EMLxl1f7funu/giphy.gif"
            width="auto"
            height={400}
            alt="David Pumpkin from SNL asking 'any questions?'"
          />
        </Slide>
      </Deck>
    );
  }
}

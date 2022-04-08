import React from "react";
import styled from "styled-components";

const Content = styled.main`
    margin-top: 1rem;
    line-height: 1.8em;
    color: ${(props) => props.theme.colors.lighter};
    ${(props) => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

    p {
        margin: 1.5rem 0;
    }
`;

const AboutMe: React.FC = () => {
    return (
        <Content>
            <p>
                A passionate and highly motivated developer born and raised in
                Kuching, Sarawak with a strong keenness to learn new things.
            </p>

            <p>
                A first-class graduate in Software Engineering from Universiti
                Malaya, I joined Dell Technologies as a Software Engineer based
                in Cyberjaya under the TMX Validation and Transition COE team
                after being crowned the Grand Prize Winner (tied) for Dell
                Virtual Hack2Hire (Feb 2021).
            </p>

            <p>
                My background covers adept usage of various programming
                languages notably <strong>Python</strong>,
                <strong> HTML/CSS</strong>, <strong> JavaScript</strong> and{" "}
                <strong> Java</strong>.
            </p>

            <p>
                During my final year project (FYP), I dabbled with data science,
                artificial intelligence (AI) and machine learning (ML), focusing
                on{" "}
                <strong>
                    emotion detection and analysis of tweets for anticipatory
                    anxiety detection
                </strong>{" "}
                using various ML stacks.
            </p>

            <p>
                Apart from work, I'm also invested in taking up leadership roles
                while also showing interest in <strong>public speaking</strong>{" "}
                and <strong>blogging</strong>.
            </p>

            <p>
                This second iteration of my portfolio + blog (devfolio) site was
                built with <strong>React</strong>, <strong>Gatsby</strong>,{" "}
                <strong>Typescript</strong>, and <strong>GraphQL</strong> among
                other technologies.
            </p>
            <p>
                Want to see my full portfolio, have a look at&nbsp;
                <a
                    href="../../../files/muhd_rahiman_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my resume
                </a>
                !
            </p>
            {/* <p> Sometimes I&nbsp;
        <a
          href="https://twitter.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet
        </a>
        &nbsp;and share&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments
        </a>
        &nbsp;or&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor.photos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pictures
        </a>
        &nbsp;on Instagram. You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:mdrhmn99@gmail.com?subject=Hi%20there!"
        >
          mdrhmn99@gmail.com
        </a>
      </p> */}
        </Content>
    );
};

export default AboutMe;

import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        A passionate and highly motivated developer with a strong keenness to learn new things 
        who is currently working as <strong>Software Engineer</strong> at Dell Technologies Malaysia based in Cyberjaya. 
      </p>

      <p>
      My background covers adept usage of various programming languages notably <strong>Python</strong>, 
      <strong> HTML/CSS</strong>, <strong> JavaScript</strong> and <strong> Java</strong>.
      </p>

      <p>
      During my final year project (FYP), 
      I dabbled with data science, artificial intelligence (AI) and machine learning (ML), focusing on emotion detection and 
      analysis of tweets for anticipatory anxiety detection using stacks primarily&nbsp;
      <a
          href="https://www.tensorflow.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TensorFlow,
        </a>&nbsp;
        <a
          href="https://scikit-learn.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scikit-Learn,
        </a>&nbsp;
        <a
          href="https://pandas.pydata.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pandas,
        </a> and&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Numpy
        </a>. 
      </p>

      <p>
        This second iteration of my portfolio + blog (devfolio) site was built with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React,
        </a>
        &nbsp;
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby,
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp;among other technologies.
      </p>
      <p>
        Want to see my full portfolio, have a look at&nbsp;
        <a
          href="../../../files/muhd_rahiman_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          my resume
        </a>!
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
  )
}

export default AboutMe

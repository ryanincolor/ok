import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"


const PressPhotos = () => (
  <StaticQuery
    query={graphql`
      query {
        pressPhotos: allFile(filter: { sourceInstanceName: { eq: "press" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox pressPhotos={data.pressPhotos.edges} />}
  />
)
export default PressPhotos

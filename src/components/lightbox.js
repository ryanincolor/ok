import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import styles from "./pressPhotos.module.css"
import { Dialog } from "@reach/dialog"
import Title from './sectionheader' 
import "@reach/dialog/styles.css"


export default class Lightbox extends Component {
  static propTypes = {
    pressPhotos: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props)

    this.state = {
      showLightbox: false,
      selectedImage: null,
    }
  }

  render() {
    const { pressPhotos } = this.props
    const { selectedImage, showLightbox } = this.state
    return (
      <Fragment>
        <Title title="Photos" />
        <div className={styles.container}>
          {pressPhotos.map(image => (
            <button 
              className={styles.previewButton}
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Img className={styles.image} fluid={image.node.childImageSharp.fluid} />
            </button>
          ))}
        </div>
        {showLightbox && (
          <Dialog className={styles.modal}>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    )
  }
}
import React from 'react'
import PropTypes from 'prop-types'
import { MarkdownPageTemplate } from '../../templates/markdown-page'

const MarkdownPagePreview = ({ entry, widgetFor }) => (
  <MarkdownPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MarkdownPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MarkdownPagePreview

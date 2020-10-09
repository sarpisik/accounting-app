import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags']);
    const titles = entry.getIn(['data', 'title'])?.toJS() ?? {};

    return (
        <React.Fragment>
            <BlogPostTemplate
                content={widgetFor('body')}
                description={entry.getIn(['data', 'description'])}
                tags={tags && tags.toJS()}
                title={titles.en}
            />
            <BlogPostTemplate
                content={widgetFor('body')}
                description={entry.getIn(['data', 'description'])}
                tags={tags && tags.toJS()}
                title={titles.tr}
            />
        </React.Fragment>
    );
};

BlogPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default BlogPostPreview;

import React from 'react';
import PropTypes from 'prop-types';
import { BlogIndexPageTemplate } from '../../templates/blog-index-page';

const BlogIndexPagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <React.Fragment>
                <BlogIndexPageTemplate title={data.title.en} />
                <BlogIndexPageTemplate title={data.title.tr} />
            </React.Fragment>
        );
    } else {
        return <div>Loading...</div>;
    }
};

BlogIndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default BlogIndexPagePreview;

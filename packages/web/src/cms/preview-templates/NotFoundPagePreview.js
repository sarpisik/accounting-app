import React from 'react';
import PropTypes from 'prop-types';
import { NotFoundPageTemplate } from '../../templates/404';

const NotFoundPagePreview = ({ entry }) => {
    const title = entry.getIn(['data', 'title']).toJS();
    const content = entry.getIn(['data', 'content']).toJS();

    return (
        <React.Fragment>
            <NotFoundPageTemplate title={title.en} content={content.en} />
            <NotFoundPageTemplate title={title.tr} content={content.tr} />
        </React.Fragment>
    );
};

NotFoundPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
};

export default NotFoundPagePreview;

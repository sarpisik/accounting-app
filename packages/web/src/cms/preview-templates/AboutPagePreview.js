import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => {
    const title = entry.getIn(['data', 'title']).toJS();

    return (
        <React.Fragment>
            <AboutPageTemplate title={title.en} content={widgetFor('body')} />
            <AboutPageTemplate title={title.tr} content={widgetFor('body')} />
        </React.Fragment>
    );
};

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default AboutPagePreview;

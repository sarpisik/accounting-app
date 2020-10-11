import React from 'react';
import PropTypes from 'prop-types';
import { NotFoundPageTemplate } from '../../templates/404';

const NotFoundPagePreview = ({ entry, widgetFor }) => {
    const title = entry.getIn(['data', 'title']).toJS();

    return (
        <React.Fragment>
            <NotFoundPageTemplate
                title={title.en}
                // content={widgetFor('body')}
            />
            <NotFoundPageTemplate
                title={title.tr}
                // content={widgetFor('body')}
            />
        </React.Fragment>
    );
};

NotFoundPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
};

export default NotFoundPagePreview;

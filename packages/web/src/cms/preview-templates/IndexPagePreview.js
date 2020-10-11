import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <React.Fragment>
                <IndexPageTemplate
                    image={getAsset(data.image)}
                    title={data.title.en}
                    heading={data.heading}
                    subheading={data.subheading}
                    description={data.description}
                    intro={data.intro || { blurbs: [] }}
                    mainpitch={data.mainpitch || {}}
                />
                <IndexPageTemplate
                    image={getAsset(data.image)}
                    title={data.title.tr}
                    heading={data.heading}
                    subheading={data.subheading}
                    description={data.description}
                    intro={data.intro || { blurbs: [] }}
                    mainpitch={data.mainpitch || {}}
                />
            </React.Fragment>
        );
    } else {
        return <div>Loading...</div>;
    }
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default IndexPagePreview;

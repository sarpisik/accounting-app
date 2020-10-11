import React from 'react';
import PropTypes from 'prop-types';
import { ProductPageTemplate } from '../../templates/product-page';

const ProductPagePreview = ({ entry, getAsset }) => {
    const title = entry.getIn(['data', 'title']).toJS();

    const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

    const entryTestimonials = entry.getIn(['data', 'testimonials']);
    const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

    const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans']);
    const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];

    return (
        <React.Fragment>
            <ProductPageTemplate
                image={getAsset(entry.getIn(['data', 'image']))}
                title={title.en}
                heading={entry.getIn(['data', 'heading'])}
                description={entry.getIn(['data', 'description'])}
                intro={{ blurbs }}
                main={{
                    heading: entry.getIn(['data', 'main', 'heading']),
                    description: entry.getIn(['data', 'main', 'description']),
                    image1: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image1', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image1', 'alt']),
                    },
                    image2: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image2', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image2', 'alt']),
                    },
                    image3: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image3', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image3', 'alt']),
                    },
                }}
                fullImage={entry.getIn(['data', 'full_image'])}
                testimonials={testimonials}
                pricing={{
                    heading: entry.getIn(['data', 'pricing', 'heading']),
                    description: entry.getIn([
                        'data',
                        'pricing',
                        'description',
                    ]),
                    plans: pricingPlans,
                }}
            />
            <ProductPageTemplate
                image={getAsset(entry.getIn(['data', 'image']))}
                title={title.tr}
                heading={entry.getIn(['data', 'heading'])}
                description={entry.getIn(['data', 'description'])}
                intro={{ blurbs }}
                main={{
                    heading: entry.getIn(['data', 'main', 'heading']),
                    description: entry.getIn(['data', 'main', 'description']),
                    image1: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image1', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image1', 'alt']),
                    },
                    image2: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image2', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image2', 'alt']),
                    },
                    image3: {
                        image: getAsset(
                            entry.getIn(['data', 'main', 'image3', 'image'])
                        ),
                        alt: entry.getIn(['data', 'main', 'image3', 'alt']),
                    },
                }}
                fullImage={entry.getIn(['data', 'full_image'])}
                testimonials={testimonials}
                pricing={{
                    heading: entry.getIn(['data', 'pricing', 'heading']),
                    description: entry.getIn([
                        'data',
                        'pricing',
                        'description',
                    ]),
                    plans: pricingPlans,
                }}
            />
        </React.Fragment>
    );
};

ProductPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default ProductPagePreview;

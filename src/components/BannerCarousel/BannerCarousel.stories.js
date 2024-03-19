import BannerCarousel from './BannerCarousel.vue';

export default {
    title: 'BannerCarousel',
    component: BannerCarousel,
};

const Template = (args) => ({
    components: { BannerCarousel },
    setup() {
      return { args };
    },
    template: '<BannerCarousel />',
});

export const bannerCarousel = Template.bind({});
bannerCarousel.args = {};
import SocialMedia from './SocialMedia.vue';

export default {
    title: 'SocialMedia',
    component: SocialMedia,
};

const Template = (args) => ({
    components: { SocialMedia },
    setup() {
      return { args };
    },
    template: '<SocialMedia />',
});

export const socialMedia = Template.bind({});
socialMedia.args = {};
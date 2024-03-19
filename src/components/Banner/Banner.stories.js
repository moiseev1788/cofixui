import Banner from './Banner.vue';


export default {
    title: 'Banner',
    component: Banner,
};

const Template = (args) => ({
    components: { Banner },
    setup() {
      return { args };
    },
    template: '<Banner />',
});

export const banner = Template.bind({});
banner.args = {};
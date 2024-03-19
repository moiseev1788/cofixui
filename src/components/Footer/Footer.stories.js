import Footer from './Footer.vue';

export default {
    title: 'Footer',
    component: Footer,
};

const Template = (args) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template: '<Footer />',
});

export const footer = Template.bind({});
footer.args = {};
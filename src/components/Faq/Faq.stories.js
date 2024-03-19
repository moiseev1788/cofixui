import Faq from './Faq.vue';

export default {
    title: 'Faq',
    component: Faq,
};

const Template = (args) => ({
    components: { Faq },
    setup() {
      return { args };
    },
    template: '<Faq />',
});

export const faq = Template.bind({});
faq.args = {};
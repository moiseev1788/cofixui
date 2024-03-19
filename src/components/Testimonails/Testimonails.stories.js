import Testimonails from './Testimonails.vue';

export default {
    title: 'Testimonails/Testimonails',
    component: Testimonails,
};

const Template = (args) => ({
    components: { Testimonails },
    setup() {
      return { args };
    },
    template: '<Testimonails v-bind="args" />',
});

export const testimonails = Template.bind({});
testimonails.args = {};
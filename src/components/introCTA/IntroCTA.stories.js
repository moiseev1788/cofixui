import IntroCTA from './IntroCTA.vue';

export default {
    title: 'IntroCTA',
    component: IntroCTA,
};

const Template = (args) => ({
    components: { IntroCTA },
    setup() {
      return { args };
    },
    template: '<IntroCTA />',
});

export const introCTA = Template.bind({});
introCTA.args = {};
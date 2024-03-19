import Steps from './Steps.vue';

export default {
    title: 'Steps',
    component: Steps,
};

const Template = (args) => ({
    components: { Steps },
    setup() {
      return { args };
    },
    template: '<Steps />',
});

export const steps = Template.bind({});
steps.args = {};
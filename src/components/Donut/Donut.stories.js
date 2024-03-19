import Donut from './Donut.vue';

export default {
    title: 'Donut',
    component: Donut,
    argTypes: {
        percent: {
            control: 'text'
        },
    }
};

const Template = (args) => ({
    components: { Donut },
    setup() {
      return { args };
    },
    template: '<Donut percent="33" />',
});

export const donut = Template.bind({});
donut.args = {
    percent: '33',
};
  
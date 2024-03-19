import Formats from './Formats.vue';

export default {
    title: 'Formats',
    component: Formats,
};

const Template = (args) => ({
    components: { Formats },
    setup() {
      return { args };
    },
    template: '<Formats />',
});

export const formats = Template.bind({});
formats.args = {};
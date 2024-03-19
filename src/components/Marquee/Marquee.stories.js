import Marquee from './Marquee.vue';

export default {
    title: 'Marquee',
    component: Marquee,
};

const Template = (args) => ({
    components: { Marquee },
    setup() {
      return { args };
    },
    template: '<Marquee />',
});

export const marquee = Template.bind({});
marquee.args = {};
import ButtonUp from './ButtonUp.vue';

export default {
    title: 'ButtonUp',
    component: ButtonUp,
};

const Template = (args) => ({
    components: { ButtonUp },
    setup() {
      return { args };
    },
    template: '<ButtonUp />',
});

export const buttonUp = Template.bind({});
buttonUp.args = {};
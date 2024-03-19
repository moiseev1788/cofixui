import Form from './Form.vue';

export default {
    title: 'Form',
    component: Form,
};

const Template = (args) => ({
    components: { Form },
    setup() {
      return { args };
    },
    template: '<Form />',
});

export const form = Template.bind({});
form.args = {};
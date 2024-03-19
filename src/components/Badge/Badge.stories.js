import Badge from './Badge.vue';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {
        number: {
            control: 'text'
        },
        label: {
            control: 'text'
        }
    },
    parameters: {
        docs: {
        }
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Badge },
    setup() {
      return { args };
    },
    template: '<Badge number="6" label="Стран" />',
});

export const badge = Template.bind({});
badge.args = {
    number: '6',
    label: 'Стран',
};
  
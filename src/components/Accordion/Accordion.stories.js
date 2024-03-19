import Accordion from "../Accordion/Accordion.vue"
import AccordionItem from "../Accordion/AccordionItem.vue"

export default {
    title: 'Accordion',
    component: Accordion, AccordionItem
};

const Template = (args) => ({
    components: { Accordion, AccordionItem },
    setup() {
      return { args };
    },
    template: '<Accordion><AccordionItem title="Почему такие большие инвестиции?">Паушальный взнос – это плата за работу под брендом на закрепленной территории, а не консалтинговая услуга. <br>В Cofix паушальный взнос покрывает услуги по поиску и согласованию помещений для открытия кофеен, проектирование, строительство кофеен «под ключ», подбор и обучение персонала, обучение партнера ведению бизнеса, оформление необходимых разрешительных документов, централизованные закупки, подключение к единой кассовой и учетной системам.</AccordionItem>',
});

export const accordion = Template.bind({});
accordion.args = {};
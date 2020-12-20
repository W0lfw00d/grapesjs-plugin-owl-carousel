import { OWL_CONTAINER, OWL_ITEMS, OWL_TYPE } from '../consts';

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  const containerModel = defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: 'div',
        traits: [],
        draggable: true,
        attributes: { 'class': 'owl-carousel' },
        components: [
          { type: OWL_ITEMS }
        ],
        jsSrc: opts.jsOwl,
        cssSrc: opts.cssOwl,
        script: function () {
          const initOwl = function () {
            const owl = $('.owl-carousel');
            owl.owlCarousel({
              margin: 10,
              loop: true,
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 2
                },
                1000: {
                  items: 3
                }
              }
            });
          };
          const script = document.createElement('script');
          script.onload = initOwl;
          script.src = '{[ jsSrc ]}';
          document.body.appendChild(script);
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '{[ cssSrc ]}';
          document.head.appendChild(link);
        }
      }
    },
    {
      isComponent(el) {
        if (el.getAttribute) {
          console.log('owptype', OWL_TYPE, OWL_CONTAINER);
          console.log('isComponent', el.getAttribute('data-gjs-type'));
          if (el.getAttribute('data-gjs-type') == OWL_CONTAINER) {
            return { type: OWL_CONTAINER };
          }
        }
      }
    });

  domc.addType(OWL_CONTAINER, {
    model: containerModel,
    view: defaultView
  });
};

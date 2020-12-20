import { OWL_ITEMS } from '../consts';

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType(OWL_ITEMS, {
      model: defaultModel.extend({
        defaults: {
          ...defaultModel.prototype.defaults,
          tagName: 'div',
          draggable: false,
          attributes: { 'class': 'item' },
          components: [
            {
              tagName: 'div',
              content: `<div class="item-img">
          <img src="http://gpj.localhost/owl/src/assets/img/feature-modern.png" alt="" />
        </div>

        <div class="item-body">
          <div class="item-title">Rocket</div>
          <div class="row item-options">
            <div class="col-6 text-left">Price</div>
            <div class="col-6 text-right">&euro; 99,00</div>
          </div>

          <div class="item-title">Extra</div>
          <div class="row item-options">
            <div class="col-6 text-left">Item 1</div>
            <div class="col-6 text-right">&euro; 10,00</div>
          </div>
          <div class="row item-options">
            <div class="col-6 text-left">Item 2</div>
            <div class="col-6 text-right">&euro; 5,00</div>
          </div>
          <div class="row item-options">
            <div class="col-6 text-left">Item 3</div>
            <div class="col-6 text-right">&euro; 1,00</div>
          </div>
          <div class="row item-options">
            <div class="col-6 text-left">Item 4</div>
            <div class="col-6 text-right">&euro; 20,00</div>
          </div>
          <div class="row item-options">
            <div class="col-6 text-left">Item 5</div>
            <div class="col-6 text-right">&euro; 10,00</div>
          </div>
        </div>`
            }
          ]
        }
      }),
      view: defaultView
    }
  );
};

import loadComponents from './components';
import loadBlocks from './blocks';
import en from './locale/en';
import { OWL_TYPE } from './consts';

export default (editor, opts = {}) => {
  const options = {
    ...{
      i18n: {}
      // default options
    },
    cssOwl: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
    jsOwl: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
    start: 25,
    ...opts,
  };

  // Define require GrapesJS API
  const domComponents = editor.DomComponents;
  const blockManager = editor.BlockManager;
  const canvas = editor.Canvas;
  const trait = editor.Canvas;

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n
  });

  editor.on('load', () => {
    // const head = canvas.getDocument().head;
    // head.insertAdjacentHTML('beforeend', `
    //   <link rel="stylesheet" href="${options.cssOwl}" />
    //   <script src="${options.jsOwl}"></script>
    // `);

    // editor.addComponents(OWL_TYPE,
    //   { at: 0 }
    // );
  });
};

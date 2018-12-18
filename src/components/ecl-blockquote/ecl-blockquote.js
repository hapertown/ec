import TwigBase from 'twig-components/twig-base';

export default class EclBlockquote extends TwigBase {
  static get observedAttributes() {
    return ['css_class', 'blockquote_body', 'blockquote_author', 'extra_attributes'];
  }

  renderTemplate(variables) {
    console.log(variables);
    return require('./ecl-blockquote.twig')(variables);
  }
}

if (!window.customElements.get('ecl-blockquote')) {
  window.customElements.define('ecl-blockquote', EclBlockquote);
}
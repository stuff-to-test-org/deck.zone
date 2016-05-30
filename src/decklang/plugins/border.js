
import { Plugin } from '../_base/_plugin';

export class Border extends Plugin {

  static operate(args, state, scope) {
    super.operate(args, state, scope);

    const { style, color, width } = args;

    state.options.card['border-style'] = style;
    state.options.card['border-color'] = color;
    state.options.card['border-width'] = `${width.val}${this.resolveUnit(width.unit, state)}`;
  }

}
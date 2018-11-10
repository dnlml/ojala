import HeaderTitle from './header/headerTitle';
import Cursor from './cursor/cursor';

export default class App {
  init() {
    this.headerTitle = new HeaderTitle();
    this.cursor = new Cursor();
  }
}

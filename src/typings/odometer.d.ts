/* eslint-disable @typescript-eslint/explicit-member-accessibility */
declare module 'utils/odometer' {
  declare class Odometer {
    constructor(Props: {
      el: HTMLElement;
      value: number;
      auto?: boolena; // Don't automatically initialize everything with class 'odometer'
      selector?: string; // Change the selector used to automatically find things to be animated
      format?: string; // Change how digit groups are formatted; and how many digits are shown after the decimal point
      duration?: number; // Change how long the javascript expects the CSS animation to take
      theme?: string; // Specify the theme (if you have more than one theme css file on the page)
      animation?: 'count';
      numberLength?: number;
    });

    update(value: number): void;
  }


  export default Odometer;
}

import Popover from './popover';
import directive from './directive';
import Vue from 'vue';

Vue.directive('popover', directive);
Popover.directive = directive;

export default Popover;

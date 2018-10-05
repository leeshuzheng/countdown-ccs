// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

import Countdown from '../_modules/atoms/countdown/countdown';

$(() => {
  window.end_date = new Date('11/11/2018');

  console.log(`project end date is ${window.end_date}`);

  new Countdown(window.end_date);
});

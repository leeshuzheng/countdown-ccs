// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

import Countdown from '../_modules/atoms/countdown/countdown';

$(() => {
  window.prototype = true;
  window.end_date = new Date('11/11/2018');

  if (window.prototype == true) {
    window.end_date = new Date('11/01/2018');
  };

  new Countdown(window.end_date);


  // handle background
  let presentsBg = $('.presents'),
  interval = 10, // in ms
  wait = 120000,
  toShowItems = $('.toShow'),
  bottomItems = $('.bottom'),
  allCoins = $('.coin'),
  coinsBottomLimit = 1305,
  coinStart = 865,
  timer = 0,
  xPos = 0,
  coinsDuration = [10000, 16000, 12500, 12000, 14500, 19000, 9000, 15000];

  if (window.prototype) {
    wait = 120000;
  }

  setInterval(function() {
    timer++;
  }, 1000);

  setInterval(function() {
    xPos--;
    presentsBg.css({
      'background-position-x': xPos
    });
  }, 10);


  let elementsInterval = setInterval(handleElements, interval);

  function handleElements() {

    if (timer == 1) {
      toShowItems.addClass('show');
    };

    if (timer == 3) {

      allCoins.each(function(idx, each) {

        function loopCoinAnimation() {

          let $each = $(each),
          duration = coinsDuration[idx];

          duration *= .7;

          console.log(`duration is ${duration}`);

          $each.addClass('show');
          $each.css({'top': coinStart});

          $each.animate({
            top: coinsBottomLimit
          }, duration, 'linear', function() {

            $each.removeClass('show');

            loopCoinAnimation();
          });
        }

        loopCoinAnimation();

      });
    }



    if (timer == 5) {

      setTimeout(function() {
        toShowItems.addClass('show');
      }, 400);

      setTimeout(function() {
        bottomItems.addClass('show');
      }, 800);

      clearInterval(elementsInterval);

      setTimeout(function() {

        console.log(`calling the timeout, restart after ${wait/1000} seconds`);

        toShowItems.removeClass('show');
        bottomItems.removeClass('show');
        allCoins.removeClass('show').css({'top': coinStart});

        allCoins.each(function(idx, each) {

          $(each).stop();

        });

        timer = 0;

        elementsInterval = setInterval(handleElements, interval);

      }, wait);

    }



  }
});

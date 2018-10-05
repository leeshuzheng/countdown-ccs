'use strict';

import '../../../_scripts/jquery-global';
import 'jquery-countdown';

export default class Countdown {
  constructor(date) {

    console.log(date);

    let countdown = $('.countdown-timer'),
      end_date = date;

    countdown.countdown(end_date, function(event) {

      if (!event.elapsed) {
        let day = event.strftime('%D'),
        hours = event.strftime('%H'),
        mins = event.strftime('%M'),
        secs = event.strftime('%S');

        $(this).html(
          `<div class="clock">
            <div class="box">
              ${separate_number(day)}
              <span class="title">Days</span>
            </div>

            <div class="box">
              ${separate_number(hours)}
              <span class="title">Hours</span>
            </div>

            <div class="box">
              ${separate_number(mins)}
              <span class="title">Mins</span>
            </div>

            <div class="box">
              ${separate_number(secs)}
              <span class="title">Secs</span>
            </div>

          </div>`
        );
      } else {
        // finish
      }

    })

    function separate_number(number) {
      // two digit numbers
      let digits = number.toString().split(''),
      html = '';

      digits.forEach(function(digit) {
        html += `<span class="num">${digit}</span>`;
      });

      return html;
    };
  }
}

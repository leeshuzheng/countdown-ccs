'use strict';

import '../../../_scripts/jquery-global';
import 'jquery-countdown';

export default class Countdown {
  constructor(date) {

    let countdown = $('.countdown-timer'),
      endDate = date;

    countdown.countdown(endDate, function(event) {

      let today = new Date(),
      endDateInFormat = event.finalDate;

      let difference = Math.abs(endDateInFormat - today) / 36e5;


      if (!event.elapsed) {
        let day = event.strftime('%D'),
        hours = event.strftime('%H'),
        mins = event.strftime('%M'),
        secs = event.strftime('%S');

        let clockHtml = `<div class="clock">
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

        </div>`;


        if (difference <= 24) {
          clockHtml = `<div class="clock">
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

          </div>`;
        }

        $(this).html(clockHtml);
      };

    });

    function separate_number(number) {
      // two digit numbers
      let digits = number.toString().split(''),
      html = '<div>';

      digits.forEach(function(digit) {
        html += `<span class="num">${digit}</span>`;
      });

      html += '</div>';

      return html;
    };
  }
}

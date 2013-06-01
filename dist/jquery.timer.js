/*
 *jQuery Timer plugin v0.2
 *Ferron Hanse [http://pragmatic-coding.blogspot.com/2012/01/jquery-timer-library.html]
 *Matt Schmidt [http://www.mattptr.net]   : author of v1
 *
 *Licensed under the BSD License:
 *http://mattptr.net/license/license.txt
 *
 */

jQuery.timer = function (interval, callback, type) {
    /**
     *
     * timer() provides a cleaner way to handle intervals
     *
     *    @usage
     * $.timer(interval, callback);
     *
     *
     * @example
     * $.timer(1000, function (timer) {
     *     alert("hello");
     *     timer.stop();
     * },'interval');
     * @desc Show an alert box after 1 second and stop
     *
     * @example
     * var second = false;
     *    $.timer(1000, function (timer) {
     *        if (!second) {
     *            alert('First time!');
     *            second = true;
     *            timer.reset(3000);
     *        }
     *        else {
     *            alert('Second time');
     *            timer.stop();
     *        }
     *    },'interval');
     * @desc Show an alert box after 1 second and show another after 3 seconds
     *
     *
     */

    var interval = interval || 1000;

    if (!callback)
        return false;

    _timer = function(interval, callback, type) {
        if(type === 'interval')
            _timerFn(interval, callback, setInterval, clearInterval);
        else if(type === 'undefined' || type === 'timeout')
            _timerFn(interval, callback, setTimeout, clearTimeout);
    };


    _timerFn = function (interval, callback, setFn, clearFn) {
        this.stop = function () {
            clearFn(self.id);
        };

        this.internalCallback = function () {
            callback(self);
        };

        this.reset = function (val) {
            if (self.id)
                clearFn(self.id);

            var value = val || 1000;
            this.id = setFn(this.internalCallback, value);
        };

        this.interval = interval;
        this.id = setFn(this.internalCallback, this.interval);

        var self = this;
    };

    return new _timer(interval, callback, type);
};

/**
 * User: ferron
 * Date: 6/1/13
 * Time: 2:45 PM
 */

describe('Testing Jquery.Timer library', function () {
    var timerCallback;

    beforeEach(function () {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.Clock.useMock();
    });


    it('Timer Timeout Test', function () {

        $.timer(3000, function (timer) {
            timerCallback();
            timer.stop();
        }, 'timeout');

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.Clock.tick(3001);

        expect(timerCallback).toHaveBeenCalled();

    });

    it("Timer Interval Test", function () {

        $.timer(100, function (timer) {
            timerCallback();
            timer.stop();
        }, 'interval');

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.Clock.tick(101);
        expect(timerCallback.callCount).toEqual(1);

        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(1);

        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(2);
    });

    it('Timer Interval Test - More Complex', function () {
        var second = false;
        $.timer(1000, function (timer) {
                timerCallback(second);
        }, 'interval');

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.Clock.tick(1001);

        expect(timerCallback).toHaveBeenCalled();

        expect(timerCallback).toHaveBeenCalledWith(false);

    });

});
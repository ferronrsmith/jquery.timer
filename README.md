Using jQuery.timer Library
===========================

```javascript
        $.timer(1000, function (timer) {
                console.log('Hello World!');
           },'timeout');
```

> The default timer settings is setTimeOut therefore the following block can be written as:

```javascript
         $.timer(1000, function (timer) {
                console.log('Hello World!');
           });
```
e.g

```javascript
$.timer(1000, function (timer) {
     console.log(Hello World!');
     timer.stop();
   },'interval');
```
> e.g. Show an alert box after 1 second and show another after 3 seconds

```javascript
var second = false;
 $.timer(1000, function (timer) {
     if (!second) {
         alert('First time!');
         second = true;
         timer.reset(3000);
     }
     else {
         alert('Second time');
         timer.stop();
     }
 },'interval');
```
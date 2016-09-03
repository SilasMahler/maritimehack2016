(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'imu',
            template: '<h1>imu-Page</h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));

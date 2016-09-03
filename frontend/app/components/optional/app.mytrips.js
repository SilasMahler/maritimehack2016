(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'mytrips',
            template: '<h1>mytrips-Page</h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));

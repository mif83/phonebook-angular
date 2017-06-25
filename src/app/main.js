import app from './lib'
import {} from './directives/phonebook/phonebook';
import {} from './directives/search/search';
import {} from './directives/person/person';

console.log("main js");

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template:"<search-field></search-field><phone-book></phone-book>"
        })
        .when('/person/:id',{
            template:"<person></person>"
        })
        .otherwise({
            template: '404 no such page'
        })
});

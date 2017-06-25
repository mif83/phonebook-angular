import app from './lib'
import {} from './directives/phonebook/phonebook';
import {} from './directives/search/search';
import {} from './directives/person/person';
import {} from './directives/change-person/change-person';


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template:"<search-field></search-field><phone-book></phone-book>"
        })
        .when('/person/:id',{
            template:"<person></person>"
        })
        .when('/change',{
            template:"<change-person></change-person>"
        })
        .otherwise({
            template: '404 no such page'
        })
});

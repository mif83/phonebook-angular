import app from '../../lib';

app.directive('person', phoneBook);

function phoneBook () {
    return {
        templateUrl: 'directives/person/person.html',
        scope:{

        },
        controller: function($scope, myFactory, $routeParams){
            $scope.person = myFactory.phonebook[$routeParams.id-1];

        }
    }
}

export default app;

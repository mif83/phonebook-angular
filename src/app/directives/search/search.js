import app from '../../lib';

app.directive('searchField', searchPerson);

function searchPerson () {
    return {
        templateUrl: './directives/search/search.html',
        scope:{

        },
        controller: function($scope, myFactory){
            $scope.myFactory = myFactory;
        }
    }
}

export default app;

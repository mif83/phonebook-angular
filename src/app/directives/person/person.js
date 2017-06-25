import app from '../../lib';

app.directive('person', phoneBook);

function phoneBook () {
    return {
        templateUrl: 'directives/person/person.html',
        scope:{

        },
        controller: function($scope, myFactory, $routeParams){
            $scope.person = myFactory.phonebook[$routeParams.id-1];
            myFactory.currentId = $routeParams.id-1;
           // $scope.random = Math.floor(Math.random()*100);
            $scope.deletePerson = function (){
                myFactory.phonebook.splice($routeParams.id-1, 1);
                localStorage.phonebook = JSON.stringify(myFactory.phonebook);
                history.back();
            };
        }
    }
}

export default app;

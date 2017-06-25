import app from '../../lib';

app.directive('phoneBook', phoneBook);
    
function phoneBook () {
    return {
        templateUrl: 'directives/phonebook/phonebook.html',
        scope:{

        },
        controller: function($scope, myFactory, $location){
            $scope.myFactory = myFactory;

            $scope.deletePerson = function (person){
                // удаление записи
                myFactory.phonebook = myFactory.phonebook.filter(item => item !== person);
                myFactory.currentPersonId = -1;

            };
            $scope.choosePerson = function (person) {

                myFactory.phonebook.forEach( (item, i) => {
                    if (item === person){
                        myFactory.currentPersonId = i;
                    }
                })
            };
            $scope.getGlobalIndex = function(person){
                let personIndex;
                myFactory.phonebook.forEach( (item, i) => {
                    if (item === person){
                        personIndex = i;
                    }
                });
                return +personIndex+1;
            }
        }
    }
}

export default app;
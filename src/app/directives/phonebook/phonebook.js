/**
 * Created by user on 23.06.17.
 */
import app from '../../lib';
console.log("phonebook");

app.directive('phoneBook', phoneBook);
    
function phoneBook () {
    return {
        templateUrl: 'directives/phonebook/phonebook.html',
        controllerAs: 'vm',
        controller: function(){
            const vm = this;
            vm.hi ='hello world hi';
        }
    }
}

export default app;
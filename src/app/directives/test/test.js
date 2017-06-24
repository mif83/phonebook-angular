/**
 * Created by user on 24.06.17.
 */
import app from '../../lib';
console.log("test");

app.directive('test', phoneBook);

function phoneBook () {
    return {
        templateUrl: './directives/test/test.html',
        controllerAs: 'vm',
        controller: function(){
            const vm = this;
            vm.hi ='TETETETETE';
        }
    }
}

export default app;
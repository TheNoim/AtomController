/**
 * Created by nilsbergmann on 29.10.16.
 */
ang.directive('mdSpinnerButton', () => {
    return {
        restrict: "E",
        scope: {
            exeFunction: "=",
            spinnerStyle: "=",
            spinnerClass: "@",
            textStyle: "=",
            textClass: "@",
            buttonStyle: "=",
            buttonClass: "@",
            text: "@"
        },
        templateUrl: "directives/md-spinner-button.html",
        link: function (scope) {
            scope.showSpinner = false;
        },
        controller: function ($scope) {
            $scope.executeButton = function () {
                console.log("Test");
                $scope.showSpinner = true;
                $scope.safeApply(function () {
                    $scope.exeFunction(function () {
                        $scope.showSpinner = false;
                        $scope.safeApply();
                    });
                });

            };
            $scope.safeApply = function(fn) {
                var phase = this.$root.$$phase;
                if(phase == '$apply' || phase == '$digest') {
                    if(fn && (typeof(fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };
        }
    };
});
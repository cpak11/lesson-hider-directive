angular.module('directivePractice').controller('directiveCtrl', function($scope){

  $scope.lessonsA = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day){
    if(lesson ==day){alert(lesson+' is active on '+day+'.');}
    else{alert('not available');}
  };

});

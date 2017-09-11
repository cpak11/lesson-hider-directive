angular.module('directivePractice').directive('lessonHider', function(){
  return {
    templateUrl: '/lessonHider.html',
    restrict: 'E',
    link: function(sc, el, attr){
      sc.getSchedule.then(function(re){
        sc.schedule = re.data;

        sc.schedule.forEach(function(scheduleDay){
          if(scheduleDay.lesson === sc.lesson){
            sc.lessonDay = scheduleDay.weekday;
            el.css('text-decoration', 'line-through');
            return;
          }
        });


        })
      },

    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();

    }
  };
});

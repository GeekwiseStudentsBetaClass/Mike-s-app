
angular.module('voteServices', ['ngResource']).
  factory('Vote', function($resource) {
    return $resource('polls/:pollId', {}, {
      query: { method: 'GET', params: { pollId: 'polls' }, isArray: false }
    })
  });

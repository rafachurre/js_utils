function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}
function closestUnder (num, arr) {
      var curr = arr[0];
      var diff = Math.abs (num - curr);
      for (var val = 0; val < arr.length; val++) {
          var newdiff = Math.abs (num - arr[val]);
          if (num > arr[val] && newdiff < diff) {
              diff = newdiff;
              curr = arr[val];
          }
      }
      return curr;
  }
function closestOver (num, arr) {
      var curr = arr[arr.length-1];
      var diff = Math.abs (num - curr);
      for (var val = 0; val < arr.length; val++) {
          var newdiff = Math.abs (num - arr[val]);
          if (num < arr[val] && newdiff < diff) {
              diff = newdiff;
              curr = arr[val];
          }
      }
      return curr;
  }
function furthest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff > diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}
function furthestUnder (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (num > arr[val] && newdiff > diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}
function furthestOver (num, arr) {
    var curr = arr[arr.length-1];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (num < arr[val] && newdiff > diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}
array = [2, 42, 82, 122, 162, 202, 242, 282, 322, 362];
number = 100;
alert ("closest: " + closest (number, array) + "\n" 
       + "closestUnder: " + closestUnder (number, array) + "\n"
       + "closestOver: " + closestOver (number, array) + "\n"
       + "furthest: " + furthest (number, array) + "\n"
       + "furthestUnder: " + furthestUnder (number, array) + "\n"
       + "furthestOver: " + furthestOver (number, array));

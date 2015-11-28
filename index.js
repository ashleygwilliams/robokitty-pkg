module.exports = {
  "makeCronString": function(input){
    var accum = '0';
    var increment = parseInt(input, 10);
    while( increment < 24 ){
      accum = accum + ',' + increment
      increment = increment + parseInt(input, 10);
    }
    return '0 0 ' + accum + ' * * *';
  }
}

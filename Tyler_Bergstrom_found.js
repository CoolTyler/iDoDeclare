function getTime(){
  var hours = 8;
  var mins = 50;
  var period = "PM";
  var str = "It's";

  if (hours > 30){
    str += 'almost' + (hours + 1);
  }else{
    str += 'just after' + hours;
  }
}
  if (period = "PM"){
    str += " in the evening";
  }else {
    str += " in the morning";
  }

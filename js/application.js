// calculates the total price of all the items
// data required: item-price, item-qty

$( document ).ready(function() {
    
  // assign an array that stores the prices of the items
  var prices = [60,50,40,50,40,25,45,20,10,];
  var total = 0;

  var sum = function() {
    // collet div of all item-qty and store in array qtys
    // var qtys = $('#item-list .item-qty input');
    var qtys = $('input');
        qtys.splice(9,1);
        total = 0;

    for (i=0; i<qtys.length; i++) {
      // convert the value of each element in qtys into number and
      // multiply by corresponding item price, then add to sum
      var subtotal = (Number($(qtys[i]).val())) * prices[i];
      if (subtotal != 0) {
        $($('.item-subtotal')[i]).text("$" + subtotal);
      } else {
        $($('.item-subtotal')[i]).text("$--.--");
      }
      total += subtotal    
    }
    // $('#total-price').text("$ " + total);
    var addspace = "";
    var spaces = total.toString();
        spaces = spaces.length;
        spaces = 12 - spaces;
        for (i=0; i<spaces; i++) {
          addspace += " ";
        }
    if (total > 999999999999) {
      $('#display').val("Harry == Long").change();
    } else if (total != 0) {
      $('#display').val("$" + addspace + total).change();
    } else {
      $('#display').val("Fork The Repo").change();
    }

    return total;
  }



  // $('input').keydown(function(e){
  //   // console.log(e.which);
  //   if (e.which == 13) {
  //     sum();
  //   };
  // });

  $('input').keyup(function(){
      sum();
  });

  $('#calc-prices-button').click(function(){ 
    sum();
  });

  $('#display').flapper({width: 13, align: 'left'}).val('Fork The Repo').change();

});
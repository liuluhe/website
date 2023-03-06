$(function() {
  // checkbox

  $('#all').click(function() {
    // select all check box

    if (this.checked) {
      $('.item').prop('checked', true)
      total()

    } else {
      $('.item').prop('checked', false)
      total()
    }
  })
  $('.item').click(function() {
    total()
    var itemArr = Array.from($('.item'))

    var res = itemArr.every(function(it) {
      return it.checked
    })
    $('#all').prop('checked', res)
  })



  // Add button
  $('.add').click(function() {
    var index = $('.add').index(this)

    // add 1
    var $input = $('.counter').eq(index)
    var num = $input.val()
    $input.val(++num)


    // get price
    var price = $('.price').eq(index).text()

    // change sub total

    $('.sub-total').eq(index).text(num * price)
    total()
  })


  // Minus button
  $('.sub').click(function() {
    var index = $('.sub').index(this)

    var $input = $('.counter').eq(index)
    var num = $input.val()
    if (num > 0) {
      $input.val(--num)
    }
    else {num = 0}

    var price = $('.price').eq(index).text()

    $('.sub-total').eq(index).text(num * price)
    total()
  })

  // Count total
  function total() {
    var sum = 0

    $('.item').each(function(index, jsObj) {
      if ($('.item')[index].checked) {
        sum = parseInt($('.sub-total')[index].innerHTML) + parseInt(sum)
      }
    })


    $('#total').text(sum)
  }
  total()
})

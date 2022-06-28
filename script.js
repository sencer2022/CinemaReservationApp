const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');


container.addEventListener('click', function(e){
    //console.log(e.target);

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        //console.log('Successful!');

        e.target.classList.toggle('selected'); // toggle: Varsa kaldırır, yoksa ekler.
        calculateTotal();
    }


    select.addEventListener('change', function(e){
        calculateTotal();
    });


    function calculateTotal(){
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
        let price = select.value;
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price;
    }


});
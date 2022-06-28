const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    //console.log(e.target);

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        //console.log('Successful!');

        e.target.classList.toggle('selected');
        
    }else{
        //console.log('Not Successful')

    }

});
const allColors = document.querySelectorAll('.button')

const body = document.querySelector('body')

allColors.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            //body.style.backgroundColor= 'grey' // this is also same
            body.style.backgroundColor= e.target.id
        } else if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id
        } else if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = 'yellow'
        } else {
            // .target is used for selecting attributes
            const white = document.querySelector('#white')
            white.style.color = 'pink'
        }
    })
})
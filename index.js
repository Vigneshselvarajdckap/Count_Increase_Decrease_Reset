const count = document.querySelector('#int')
// console.log(count)
const dec = document.querySelector('#de')
// console.log(dec)
const res = document.querySelector('#re')
// console.log(res)
const inc = document.querySelector('#in')
// console.log(inc)

inc.addEventListener('click',adding)
    // console.log(e)
    let add = 0

    function adding(){
        add ++
        count.innerText = add
        if(count.innerText > 0){
        count.style.color ='green'
        }
        else if(Number(count.innerText) === 0){
            count.style.color='black'
        }
        // console.log(count)
    }

    dec.addEventListener('click',less)
 
    function less(){
       add--
        count.innerText = add
        //  console.log(count.innerText)
        if(count.innerText < 0){
            count.style.color ='red'
        }
        else if(Number(count.innerText) === 0){
            count.style.color='black'
        }
        // console.log(count)
    }

    res.addEventListener('click',ress)

    function ress(){
       add = 0
        count.innerText = add
        if(count.innerText === "0"){
            count.style.color ='black'
            }
        // console.log(count)
    }


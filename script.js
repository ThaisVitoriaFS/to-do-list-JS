const localStorageKey = 'to-do-list-tv'

function newtask()
{
    let input = document.getElementById('input-new-task')
    //validação

    if(!input.value)
    {
        alert('Digite algo para incluir na sua lista')
    }    
    //else if()
    else 
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorageKey.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }

}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values. length; i++)
        {
            list.innerHTML += `<li>${values[i]['name']}</li>`
        }
}
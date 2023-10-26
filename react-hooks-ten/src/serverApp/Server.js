const baseUrl = 'http://localhost:3030/jsonstore/todos'

export const create = async (e, todo) => {

 const result = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json()).then(data => data);

    return result;
}


export const deleteTodo = async (itemId) => {
    const result = await fetch(`${baseUrl}/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemId)
    }).then(res => res.json()).then(data => data);

    return result;
}

export const fullUpdate = async (itemId, todo) => {

    await fetch(`${baseUrl}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json()).then(data => data);

    
}


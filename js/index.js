function showResponse(res){
    document.querySelector('#text').innerHTML = `
        <h1>Informações</h1>
        <pre>
            ${JSON.stringify(res.data,null,'\t')}
        </pre>
    `
}
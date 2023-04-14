/*
? fichier js à modifier : attente API
*/

//EXPORTS

export function getAllHousing()
{
    return fetch('/api/logements.json', // ajout d'un proxy dans setupProxy.js pour contourner CORS
    {
        method: 'get',
        headers: { 'accept': 'application/json' }
    })
    .then(res => res.json())
}
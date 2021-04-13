
const table = document.getElementById('myTable');
let rank = 1;

const buildTable = () => {
    fetch('data3.json')
    .then (response => response.json())
    .then (jsonResponse => {
        jsonResponse.sort((a, b) => b.Alignment - a.Alignment)
        jsonResponse.forEach(element => {
            
            let row = `<tr>
                            <td>${rank}</td>
                            <td>${element.Title}</td>
                            <td>${element.Alignment}</td>
                        </tr>`;
             table.innerHTML += row;
             rank++;
        })
    })
};

buildTable();
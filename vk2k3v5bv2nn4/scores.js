var tbody = document.querySelector('.wrapper.scores-wrapper .scores tbody');

function updateScoresTable() {
    var rows = '';
    var list = getStatsList();
    list.slice().reverse().forEach(data => {
        var cells = `<td>${data.mistake}</td>`;
        cells += `<td>${data.wpm}</td>`;
        cells += `<td>${data.cpm}</td>`;
        rows += `<tr>${cells}</tr>`;
    });

    tbody.innerHTML = rows;
    updateEventListeners(list);
}

function addToStatsList(mistakes, wpms, cpms) {
    var list = getStatsList();
    var data = {
        'mistake': mistakes,
        'wpm': wpms,
        'cpm': cpms,
        'time': getTimeObject()
    }
    list.push(data);
    console.log(list);
    localStorage.setItem('statList', JSON.stringify(list));
    updateScoresTable();
}

function deleteFromStatsList() {
    var list = getStatsList();
    if (list.length > 0) {
        list.pop();
    }
    console.log(list);
    localStorage.setItem('statList', JSON.stringify(list));
}

function getTimeObject() {
    var currentTime = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthNames[currentTime.getMonth()];
    var date = String(currentTime.getDate());

    var hours = String(currentTime.getHours()).padStart(2, '0');
    var minutes = String(currentTime.getMinutes()).padStart(2, '0');
    var seconds = String(currentTime.getSeconds()).padStart(2, '0');
    var timeOfDay = `${hours}:${minutes}:${seconds}`;

    return { 'date': `${month} ${date}`, 'timeOfDay': timeOfDay };
}

function getStatsList() {
    var list = JSON.parse(localStorage.getItem('statList')) || [];
    return list;
}

function updateEventListeners(list) {
    var rows = document.querySelectorAll('.wrapper.scores-wrapper .scores tbody tr');

    for (var i = 0; i < rows.length; i += 1) {
        let row = rows[i];
        let data = list[rows.length-1-i];

        row.addEventListener('mousedown', function() {
            let cells = row.querySelectorAll('td');
            let time = data.time;
            console.log(time.date);
            console.log(cells[0]);
            cells[0].innerText = time.date;
            cells[1].innerText = time.timeOfDay;
            cells[2].innerText = '';
        });
        row.addEventListener('mouseup', () => {
            let cells = row.querySelectorAll('td');
            console.log(data.mistake);
            console.log(cells[0]);
            cells[0].innerText = data.mistake;
            cells[1].innerText = data.wpm;
            cells[2].innerText = data.cpm;
        });
    }
}

updateScoresTable();
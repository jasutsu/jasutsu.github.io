var rows = document.querySelectorAll('.wrapper.scores-wrapper .scores tbody tr');
var tbody = document.querySelector('.wrapper.scores-wrapper .scores tbody');

function updateScoresTable() {
    var rows = '';
    var list = getStatsList();
    var firstRow = true;
    list.slice().reverse().forEach(data => {
        var cells = `<td>${data.mistake}</td>`;
        cells += `<td>${data.wpm}</td>`;
        cells += `<td>${data.cpm}</td>`;
        if (!firstRow) {
            rows += `<tr>${cells}</tr>`;
        }
        firstRow = false;
    });

    tbody.innerHTML = rows;
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
	if(list.length > 0) {
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

	return {'date': `${month} ${date}`, 'timeOfDay': timeOfDay};
}

function getStatsList() {
	var list = JSON.parse(localStorage.getItem('statList')) || [];
	return list;
}

for(var i = 0; i < rows.length; i += 1) {
    var row = rows[i];

    // row.addEventListener('mouseenter', () => {
    //     var cells = row.querySelectorAll('td');
    //     var list = getStatsList();
    //     var time = list[i].time;
    //     cells[0].innerText = time.date;
    //     cells[1].innerText = time.timeOfDay;
    // });
    // row.addEventListener('mouseleave', () => {
    //     var cells = row.querySelectorAll('td');
    //     var list = getStatsList();
    //     cells[0].innerText = list[i].mistake;
    //     cells[1].innerText = list[i].wpm;
    // });
}

updateScoresTable();
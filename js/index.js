
btn.addEventListener('click', makeAjax);

function makeAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            address.innerHTML = clientData.address;
            tel.innerHTML = clientData.tel;
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();
}
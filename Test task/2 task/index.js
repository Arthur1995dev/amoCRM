
const serviceList = document.querySelector('.service_list');
const serviceItems = serviceList.children;

const newServiceContent = ['Skype аудит', '30 виджетов', 'Dashboard', 'Месяц amoCRM'];

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 620) {
        for (let i = 0; i < serviceItems.length; i++) {
            let serviceItemsTitle = serviceItems[i].querySelector('h3'); 
            serviceItemsTitle.textContent = newServiceContent[i];
        }
        let gratitude = document.querySelector('.gratitude');
        gratitude.innerHTML = 'Благодарность <br> клиентов'
    }
})
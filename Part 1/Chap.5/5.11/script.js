// 1 Задача
let d = new Date(2012, 1, 20, 3, 12);
alert( d );

// 2 Задача
function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[week.getDay()];
}

// 3 Задача
function getLocalDay(date) {
    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
}

// 4 Задача
function getDateAgo(date, days) {
    let dateClone = new Date(date);
  
    dateClone.setDate(date.getDate() - days);
    return dateClone.getDate();
}

// 5 Задача
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// 6 Задача
function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

// 7 Задача
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}

// 8 Задача
function formatDate(date) {
    let diff = new Date() - date;
  
    if (diff < 1000) {
      return 'прямо сейчас';
    }
  
    let sec = Math.floor(diff / 1000);
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000);
    if (min < 60) {
      return min + ' мин. назад';
    }

    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2));
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
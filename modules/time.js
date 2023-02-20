/* eslint-disable */
const dateContainer = document.querySelector('.date-container');

const addZero = (num) => ((num < 10) ? `0${num}` : num);

const updateTime = () => {
  const date = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATE_MED);
  const { hour } = luxon.DateTime.local().c;
  const min = luxon.DateTime.local().c.minute;
  const sec = addZero(luxon.DateTime.local().c.second);

  dateContainer.innerHTML = `${date} ${hour}:${min}:${sec}`;
};

export default updateTime;
module.exports = {
    getCancelationDate: (selectDate, cancelation) => {
      const monthNames = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec',
      ];

        const monthIndex = monthNames.indexOf(selectDate[0]);
        selectDate = new Date(selectDate[2], monthIndex, selectDate[1]);
        selectDate.setHours(selectDate.getHours() + cancelation);
        return `${monthNames[selectDate.getMonth()]} ${selectDate.getDate()}`;
    },
    getToday: () => {
        Date.prototype.monthNames = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
        Date.prototype.getMonthName = function () {
            return this.monthNames[this.getMonth()];
          };
          const today = new Date();
          return [today.getMonthName(), today.getDate(), today.getFullYear()];

    },

    getNextMonthYear: (currentMonthYear) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec',
      ];
      let nextMonthindex = monthNames.indexOf(currentMonthYear[0]) + 1;
      if(nextMonthindex < monthNames.length) {
        const nextMonth = monthNames[nextMonthindex];
        return [nextMonth, currentMonthYear[1]];
      } else {
        nextMonthindex = nextMonthindex % monthNames.length;
        const nextMonth = monthNames[nextMonthindex];
        return [nextMonth, (Number(currentMonthYear[1]) + 1)]
      }
    },

    getPreviousMonthYear: (currentMonthYear) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec',
      ];
      let prevMonthindex = monthNames.indexOf(currentMonthYear[0]) -1;
      if(prevMonthindex >= 0) {
        const prevMonth = monthNames[prevMonthindex];
        return [prevMonth, currentMonthYear[1]];
      } else {
        prevMonthindex = 11;
        const prevMonth = monthNames[prevMonthindex];
        return [prevMonth, (Number(currentMonthYear[1]) -1 )]
      }
    },

    getDateStr: (selectDate) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec',
      ];
      let monthNum = monthNames.indexOf(selectDate[0]) + 1;
      let monthStr;
      if(monthNum < 10){
        monthStr = '0' + monthNum.toString();
      }else {
        monthStr = monthNum.toString();
      }

      let dateNum = selectDate[1];
      if(dateNum < 10) {
        dateNum = '0' + dateNum.toString();
      } else {
        dateNum = dateNum.toString();
      }
      return selectDate[2] + monthStr + dateNum;
    },

    isToday: (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const today = new Date();
      return year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
    },

    isBeforeToday: (date) => {
      return new Date(date.toDateString()) < new Date(new Date().toDateString());
    }

}

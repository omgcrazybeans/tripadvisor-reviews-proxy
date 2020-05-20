/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../styles/PlanFooter.css';
import date from '../helpers/getDate.js';

const PlanFooter = ({ cancelation, totalBooked, showCalendar, showAdults, showOptions, goNext, selectDate}) => {
  
  let btnText;
  if(showAdults || showCalendar) {
    btnText = 'Next'
  } else if (showOptions) {
    btnText = 'Book Now'
  } else {
    btnText = 'Check Availability'
  }
  return (
  <div className={styles.planfooter}>
    <div data-test='updatebtn' className={styles.updatebtn} onClick={goNext}>
      {btnText}
    </div>
    <div className={styles.cancelation}>
      <div className={styles.cancelation_btn}>Free Cancelation</div>
      <div data-test='cancelterm' className={styles.cancelation_term}>
      {`Risk free 100% refund if you cancel by ${date.getCancelationDate(selectDate, cancelation)}`}
      </div>
    </div>
    <div className={styles.popularity}>
      <div data-test='popnum' className={styles.popularity_number}>{`Popular: Booked by ${totalBooked} travelers`}</div>
      <div>
        <span className={styles.checkicon} />
        <span className={styles.popularity_lowprice}>Low Price Guarantee</span>
      </div>
      <div>
      <span className={styles.checkicon} />
        <span className={styles.popularity_lowprice}>No Booking Fees</span>
      </div>
    </div>
  </div>
)};

export default PlanFooter;

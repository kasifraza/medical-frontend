import * as Yup from "yup";
import dayjs from "dayjs";
const collectionValidationSchema = Yup.object({
    patientName: Yup.string().max(100, "Name is too long").required('Name is required'),
    patientMobileNumber: Yup.string().min(10,"Enter Valid 10 digit Indian Mobile Number").max(10, "Enter Valid Indian 10 Digit Mobile Number").required('Mobile Number is required'),
    date: Yup.date(),
    amount: Yup.number().required('Amount is required'),
    referenceNumber: Yup.string().max(50, "Reference Number is too long"),
    notes: Yup.string().max(200, "Notes is too long"),
    shift: Yup.string().oneOf(["DAY", "NIGHT", "MIDNIGHT"]).required('Shift is required'),
});
export function getShift() {
    const currentHour = new Date().getHours();

    if (currentHour >= 8 && currentHour < 16) {
        return 'DAY'; // Morning shift from 8 AM to 4 PM
    } else if (currentHour >= 16 && currentHour < 24) {
        return 'NIGHT'; // Evening shift from 4 PM to midnight
    } else {
        return 'MIDNIGHT'; // Night shift from midnight to 8 AM
    }
}
export const getDefaultDateValue = (date) => {
    const dateFormat = 'YYYY-MM-DD';
    const dateObject = date ? dayjs(date, dateFormat) : null;
  
    if (dateObject) {
      return dateObject;
    } else {
      return dayjs();
    }
};

const collectionInitialSchema = {
    patientName: null,
    patientMobileNumber: null,
    date:"",
    amount: 0,
    referenceNumber: '',
    notes: '',
    shift:getShift(),
}


export { collectionValidationSchema, collectionInitialSchema }
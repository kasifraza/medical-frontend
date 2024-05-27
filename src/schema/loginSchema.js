import * as Yup from "yup";
const loginValidationSchema = Yup.object({
    email:Yup.string().required("Email is Required"),
    password:Yup.string().required("Password is Required"),
});
const loginStaticInitialValues = {
    email: null,
    password: null
}


export { loginStaticInitialValues, loginValidationSchema }
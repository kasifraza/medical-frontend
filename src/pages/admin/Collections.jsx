import { Button, DatePicker, Drawer, Input, Popconfirm, Select, Table } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useFormik } from 'formik';
import { collectionInitialSchema, collectionValidationSchema, getDefaultDateValue } from "../../schema/collectionSchema";
const data = [
    {
        key: "1",
        patientName: "John Doe",
        patientMobileNumber: "9090909890",
        createdBy: "Kasif Raza",
        date: "27 February 2024",
        amount: 5000,
        shift: "Morning",
    },
];
const columns = [
    {
        title: "Name",
        dataIndex: "patientName",
        key: "patientName",
        responsive: ["xs", "sm", "md", "lg"],
    },
    {
        title: "Mobile No.",
        dataIndex: "patientMobileNumber",
        key: "patientMobileNumber",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Record Added By",
        dataIndex: "createdBy",
        key: "createdBy",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Reference Number",
        dataIndex: "referenceNumber",
        key: "referenceNumber",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Shift",
        dataIndex: "shift",
        key: "shift",
        responsive: ["sm", "md", "lg"],
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
            <span>
                <Button type="link" icon={<EyeOutlined />} />
                <Popconfirm
                    title="Are you sure delete this record?"
                    onConfirm={() => handleDelete(record.key)}
                >
                    <Button type="link" icon={<DeleteOutlined />} />
                </Popconfirm>
            </span>
        ),
        responsive: ["xs", "sm", "md", "lg"],
    },
];
const handleDelete = (key) => {
    console.log(`Deleted block with key: ${key}`);
};
const Collections = () => {
    const [open, setOpen] = useState(false);
    const [collectionFormInitialValues, setCollectionFormValues] = useState(collectionInitialSchema)
    const formik = useFormik({
        validationSchema: collectionValidationSchema,
        initialValues: collectionFormInitialValues || collectionInitialSchema,
        onSubmit: async (values) => {
            console.log("----",values)
        }
    })
    console.log(formik.errors)
    return (
        <>
            <div className="block lg:flex justify-between items-center text-xl text-gray-500 font-semibold">
                <h1>Collections</h1>
                <Button
                    className=" text-lg text-gray-900 font-bold  bg-sky-400 h-[42px] mt-6 mb-2"
                    onClick={() => setOpen(true)}
                >
                    Add Collection
                </Button>
            </div>

            <div className="container">
                <Drawer
                    title="Add Collection"
                    placement={"top"}
                    closable={true}
                    onClose={() => setOpen(false)}
                    open={open}
                    key={"top"}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4  items-center">
                        <div className="col-span-1">
                            <label htmlFor="patientName" className="flex items-center">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="patientName"
                                name="patientName"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Name"
                                onChange={formik.handleChange}
                                value={formik.values?.patientName}
                                onBlur={formik.handleBlur}

                            />
                            {formik.touched?.patientName && formik.errors?.patientName ? <p className="text-red-500">{formik.errors?.patientName}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="patientMobileNumber" className="flex items-center">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="patientMobileNumber"
                                name="patientMobileNumber"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Mobile Number"
                                onChange={formik.handleChange}
                                value={formik.values?.patientMobileNumber}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched?.patientMobileNumber && formik.errors?.patientMobileNumber ? <p className="text-red-500">{formik.errors?.patientMobileNumber}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="date">Date</label>
                            <DatePicker
                                id="date"
                                name="date"
                                placeholder="Select Date"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                onBlur={formik.handleBlur}
                                onChange={(date, dateString) => {
                                    formik.setFieldTouched(
                                        `date`,
                                        true,
                                    );
                                    formik.setFieldValue(
                                        `date`,
                                        dateString,
                                    );
                                }}
                                defaultValue={getDefaultDateValue(
                                    formik.values?.date,
                                )}
                                value={
                                    formik.values?.date
                                        ? dayjs(
                                            formik.values?.date,
                                        )
                                        : null
                                }

                            />
                            {formik.touched?.date && formik.errors?.date ? <p className="text-red-500">{formik.errors?.date}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="amount" className="flex items-center">
                                Amount(INR) <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="text"
                                id="amount"
                                name="amount"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Amount"
                                onChange={(e) => {
                                    // console.log(e.target.value);
                                    const amount = parseInt(e?.target?.value);
                                    formik.setFieldValue("amount", amount)
                                }}
                                value={formik.values?.amount}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched?.amount && formik.errors?.amount ? <p className="text-red-500">{formik.errors?.amount}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="referenceNumber">Reference Number</label>
                            <Input
                                type="text"
                                id="referenceNumber"
                                name="referenceNumber"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Reference Number"
                                value={formik.values?.referenceNumber}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched?.referenceNumber && formik.errors?.referenceNumber ? <p className="text-red-500">{formik.errors?.referenceNumber}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="notes">Notes</label>
                            <Input
                                type="text"
                                id="notes"
                                name="notes"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter Notes"
                                value={formik.values?.notes}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched?.notes && formik.errors?.notes ? <p className="text-red-500">{formik.errors?.notes}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="shift" className="flex items-center">
                                Shift <span className="text-red-500">*</span>
                            </label>
                            <Select
                                id="shift"
                                name="shift"
                                placeholder="Select Shift"
                                className="w-full h-[42px]"
                                value={formik.values?.shift}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                            >
                                <Select.Option value="DAY">Day</Select.Option>
                                <Select.Option value="MIDNIGHT">Midnight</Select.Option>
                                <Select.Option value="NIGHT">Night</Select.Option>
                            </Select>
                            {formik.touched?.shift && formik.errors?.shift ? <p className="text-red-500">{formik.errors?.shift}</p> : null}
                        </div>
                        <div className="col-span-1">
                            <Button className="w-1/2 text-lg text-gray-500  bg-sky-400 h-[42px] mt-6" onClick={() => formik.handleSubmit()}>
                                Save
                            </Button>
                        </div>
                    </div>
                </Drawer>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        </>
    );
};

export default Collections;

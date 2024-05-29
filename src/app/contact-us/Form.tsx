"use client";
import React, { useState } from "react";
import api from "@/lib/api";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useFormik } from "formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Form = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: ContactSchema,

    onSubmit: async (values) => {
      if (loading) {
        return;
      }

      setLoading(true);

      const obj = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };

      try {
        const res = await api.post("/messages", {
          data: obj,
        });

        if (res.data) {
          toast.success(
            "We got your email. We will reach you soon with your queries."
          );
          setLoading(false);
          formik.resetForm();
        }
      } catch (error) {
        toast.error(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
        setLoading(false);
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      className="flex flex-col gap-[3.25rem]"
    >
      <div className="flex flex-col gap-1">
        <input
          name="name"
          type="text"
          placeholder="name"
          className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <span className="text-xs tracking-wider uppercase text-red-700">
            {formik.errors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          name="email"
          type="email"
          placeholder="your email"
          className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-xs tracking-wider uppercase text-red-700">
            {formik.errors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          name="subject"
          type="text"
          placeholder="your subject"
          className="mobile414:text-[1rem] outline-none focus:border-black border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.subject && formik.errors.subject && (
          <span className="text-xs tracking-wider uppercase text-red-700">
            {formik.errors.subject}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          placeholder="your message"
          className="mobile414:text-[1rem] outline-none focus:border-black resize-none h-[8rem] border-b border-black/10 bg-transparent py-[.6rem] text-[1.25rem] placeholder:capitalize placeholder:text-black/40"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.message && formik.errors.message && (
          <span className="text-xs tracking-wider uppercase text-red-700">
            {formik.errors.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="mobile414:text-[.8rem]"
        variant={"default"}
      >
        {loading ? "Please wait..." : "submit"}
      </Button>
    </form>
  );
};

export default Form;

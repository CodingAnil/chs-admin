import { useFormik } from "formik";
import { useState } from "react";
import { isModelProfileOnchangeValid } from "../validations/profile";

const useForm = ({ initialValues, validationFunction, handleFormSubmit }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validate: validationFunction,
    onSubmit: handleFormSubmit,
    enableReinitialize: true,
  });

  const {
    handleSubmit,
    touched,
    values,
    errors,
    setFieldValue,
    setFieldError,
    resetForm,
    setErrors,
  } = formik;

  const toggleVisibility = (field) => {
    setFieldValue(field, !formik.values[field]);
  };

  const handleSelect = (name, value, isMulti) => {
    if (!value) return;
    let val = value;
    if (isMulti) {
      const prevStats = values.stats[name] || [];
      val = prevStats.includes(value)
        ? prevStats.filter((it) => it !== value)
        : [...prevStats, value];
    }
    setFieldValue(name, val);
    if (val) {
      setFieldError(name, "");
    }
  };

  const selectInputChange = (name, value) => {
    let valueType =
      name == "height"
        ? values?.stats?.heightType
        : name == "weight"
        ? values?.stats?.weightType
        : name == "cockSize"
        ? values?.stats?.cockSizeType
        : "";
    console.log();
    setFieldError(name, isModelProfileOnchangeValid(name, value, valueType));
  };

  return {
    loading,
    handleSubmit,
    touched,
    values,
    errors,
    setLoading,
    formik,
    toggleVisibility,
    handleSelect,
    selectInputChange,
    resetForm,
    setFieldValue,
    setFieldError,
    setErrors,
  };
};

export default useForm;

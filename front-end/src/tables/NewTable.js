import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { createTable } from "../utils/api";

export default function NewTable({ loadDashboard }) {
  const history = useHistory();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    table_name: "",
    capacity: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const abortController = new AbortController();

    if (validateFields()) {
      createTable(formData, abortController.signal)
        .then(loadDashboard)
        .then(() => history.push(`/dashboard`))
        .catch(setError);
    }

    return () => abortController.abort();
  }

  function handleChange({ target }) {
    setFormData({
      ...formData,
      [target.name]:
        target.name === "capacity" ? Number(target.value) : target.value,
    });
  }

  function validateFields() {
    let foundError = null;

    if (formData.table_name === "" || formData.capacity === "") {
      foundError = { message: "Both fields are required." };
    } else if (formData.table_name.length < 2) {
      foundError = { message: "Table name must be at least 2 characters." };
    }

    setError(foundError);

    return foundError === null;
  }

  return (
    <div className="container">
      <h1 className="page-title">Create a Table</h1>
      <form>
        <ErrorAlert error={error} />

        <label className="label">Table Name:</label>
        <input
          className="form-control form-input"
          name="table_name"
          id="table_name"
          type="text"
          minLength={2}
          onChange={handleChange}
          value={formData.table_name}
          required
        />

        <label className="label">Capacity:</label>
        <input
          className="form-control form-input"
          name="capacity"
          id="capacity"
          type="number"
          min={1}
          onChange={handleChange}
          value={formData.capacity}
          required
        />

        <div className="btn-container">
          <button
            className="btn btn-submit btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-submit btn-secondary btn"
            type="button"
            onClick={history.goBack}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

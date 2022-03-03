import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import { listReservations } from "../utils/api";
import ReservationRow from "../dashboard/ReservationRow";

export default function Search() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  function handleChange({ target }) {
    setMobileNumber(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const abortController = new AbortController();
    setError(null);

    listReservations({ mobile_number: mobileNumber }, abortController.signal)
      .then(setReservations)
      .catch(setError);

    return () => abortController.abort();
  }

  const searchResults = () => {
    return reservations.length > 0 ? (
      reservations.map((reservation) => (
        <ReservationRow
          key={reservation.reservation_id}
          reservation={reservation}
        />
      ))
    ) : (
      <div className="container">
        <h4>No reservations found</h4>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="page-title">Search</h1>
      <form>
        <ErrorAlert error={error} />

        <input
          className="form-control form-input"
          name="mobile_number"
          id="mobile_number"
          type="tel"
          placeholder="Enter a customer's phone number"
          onChange={handleChange}
          value={mobileNumber}
          required
        />

        <div className="btn-container">
          <button
            className="btn btn-submit btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>

      {reservations.length <= 0 ? null : (
        <table className="table table-hover my-1">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">People</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Cancel</th>
              <th scope="col">Seat</th>
            </tr>
          </thead>

          <tbody>{searchResults()}</tbody>
        </table>
      )}
    </div>
  );
}

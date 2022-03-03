import React from "react";
import { finishTable } from "../utils/api";

export default function TableRow({ table, loadDashboard }) {
  if (!table) return null;

  function handleFinish() {
    if (
      window.confirm(
        "Is this table ready to seat new guests? This cannot be undone."
      )
    ) {
      const abortController = new AbortController();
      finishTable(table.table_id, abortController.signal).then(loadDashboard);
      return () => abortController.abort();
    }
  }

  function showFinishButton(table, reservationId) {
    if (reservationId) {
      return (
        <button
          className="btn btn-light btn-sm"
          data-table-id-finish={table.table_id}
          onClick={() => handleFinish(table)}
        >
          Finish
        </button>
      );
    }
    return null;
  }

  return (
    <tr>
      <th scope="row">{table.table_id}</th>
      <td>{table.table_name}</td>
      <td>{table.capacity}</td>
      <td data-table-id-status={table.table_id}>{table.status}</td>
      <td>{table.reservation_id ? table.reservation_id : "--"}</td>
      <td>{showFinishButton(table, table.reservation_id)}</td>
    </tr>
  );
}

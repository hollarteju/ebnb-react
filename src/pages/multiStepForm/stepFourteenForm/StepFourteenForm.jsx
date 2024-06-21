import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function StepFourteenForm({
  formData,
  handleFieldChange,
  prevStep,
  loading,
  handleSubmit,
  success,
  userId,
}) {
  const isFormValid = () => {
    const requiredFields = [
      "managers_name",
      "managers_position",
      "bank_name",
      "account_name",
      "swift_code",
      "payment_accepted",
      "payment_currency",
      "top_attraction",
      "closest_airports",
    ];

    return requiredFields.every((field) => formData[field] !== "");
  };

  return (
    <div>
      <h2>Step 14</h2>

      <div className="form-group">
        <label htmlFor="managers_name" className="floating-label">
          Manager's Name:
        </label>
        <input
          type="text"
          name="managers_name"
          value={formData.managers_name}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="managers_position" className="floating-label">
          Manager's Position:
        </label>
        <input
          type="text"
          name="managers_position"
          value={formData.managers_position}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>

      {success && (
        <div>
          <div className="alert alert-success">{success}</div>
          <p>
            Press here to create rooms:{" "}
            <Link to={`/create-room/${userId}`}>Create Rooms</Link>
          </p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="bank_name" className="floating-label">
          Bank Name:
        </label>
        <input
          type="text"
          name="bank_name"
          value={formData.bank_name}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="account_name" className="floating-label">
          Account Name:
        </label>
        <input
          type="text"
          name="account_name"
          value={formData.account_name}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="swift_code" className="floating-label">
          Swift Code:
        </label>
        <input
          type="text"
          name="swift_code"
          value={formData.swift_code}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="payment_accepted" className="floating-label">
          Payment Accepted:
        </label>
        <select
          name="payment_accepted"
          className="form-control"
          value={formData.payment_accepted}
          onChange={handleFieldChange}
        >
          <option value="cash">Cash</option>
          <option value="visa">Visa</option>
          <option value="cheque">Cheque</option>
          <option value="master_card">Master card</option>
          <option value="verse">Verse</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="payment_currency" className="floating-label">
          Payment Currency:
        </label>
        <select
          name="payment_currency"
          className="form-control"
          value={formData.payment_currency}
          onChange={handleFieldChange}
        >
          <option value="ngn">NGN</option>
          <option value="usd">Usd</option>
          <option value="eur">Euro</option>
          <option value="gbp">Gbp</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="top_attraction" className="floating-label">
          Top Attraction:
        </label>
        <input
          type="text"
          name="top_attraction"
          value={formData.top_attraction}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="closest_airports" className="floating-label">
          Closest Airports:
        </label>
        <input
          type="text"
          name="closest_airports"
          value={formData.closest_airports}
          className="form-control"
          onChange={handleFieldChange}
        />
      </div>

      <div className="d-flex justify-content-between mb-2">
        <button className="btn btn-secondary" onClick={prevStep}>
          Previous
        </button>
        <button
          className="btn btn-success"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Submitting...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}

StepFourteenForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

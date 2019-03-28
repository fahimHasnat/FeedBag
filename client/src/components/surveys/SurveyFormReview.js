import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  //props as argument ex: onCancel
  const reviewFileds = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm entries</h5>
      {reviewFileds}

      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green white-text btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));

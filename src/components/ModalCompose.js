import React from "react";
import jquery from "jquery";

export class ModalCompose extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {};
  }

  show(idx) {
    /* open message in modal */
    jquery(this.refs.composeModal).modal("show");
  }

  render() {
    return (
      <div
        id="composeModal"
        className="modal fade mt-0 mt-md-5"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        ref="composeModal"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-uppercase text-muted">Compose</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form" role="form" autoComplete="off">
                <div className="form-row py-2">
                  <label htmlFor="sendTo" className="col-sm-2 mb-0">
                    To
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      name="sendTo"
                      id="sendTo"
                      className="form-control"
                      required=""
                      value={this.props.sendTo}
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <label htmlFor="subject" className="col-sm-2 mb-0">
                    Subject
                  </label>
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <label htmlFor="message2" className="col-sm-2 mb-0">
                    Message
                  </label>
                  <div className="col">
                    <textarea
                      rows="6"
                      name="message2"
                      id="message2"
                      className="form-control"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-row py-2">
                  <div className="col-sm-auto py-1">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary btn-block"
                    >
                      Attachments
                      <i className="align-middle icon-paper-clip fa fa-paperclip ml-1" />
                    </button>
                  </div>
                  <div className="col py-1">
                    <button
                      type="submit"
                      className="btn btn-secondary float-right ml-1"
                    >
                      Send Message
                    </button>
                    <button
                      type="submit"
                      className="btn btn-outline-secondary float-right"
                    >
                      Save Draft
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCompose;

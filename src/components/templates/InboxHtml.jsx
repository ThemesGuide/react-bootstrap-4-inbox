import React from "react";
import { AboutHtml } from "./AboutHtml";

export const InboxHtml = ({ parent }) => {
  return (
    <main className="px-2 flex-fill">
      <div className="row">
        <div className="col-12 px-4 d-flex flex-column">
          <div className="row">
            <div className="col-md-3 py-3">
              <ul className="list-group sticky-top sticky-offset">
                <button
                  className="btn btn-block btn-outline-secondary my-1 text-uppercase"
                  data-target="#composeModal"
                  data-toggle="modal"
                >
                  Compose <i className="align-middle icon-pencil" />
                </button>
                <div className="nav py-2 flex-md-column justify-content-center">
                  <a
                    href=""
                    className="nav-link text-muted px-md-1 active"
                    title="Messages"
                    data-toggle="tab"
                    data-target="#messages"
                  >
                    <span className="icon icon-envelope fa fa-fw fa-envelope mr-md-1" />
                    <span className="d-none d-md-inline">Messages</span>
                    <span
                      className="badge badge-pill badge-primary"
                      title="Unread"
                    />
                  </a>
                  <a
                    href={true}
                    className="nav-link text-muted px-md-1"
                    title="Deleted"
                    data-toggle="tab"
                    data-target="#deleted"
                  >
                    <span className="icon icon-trash fa fa-fw fa-trash mr-md-1" />
                    <span className="d-none d-md-inline">Deleted</span>
                  </a>
                  <a
                    href=""
                    className="nav-link text-muted px-md-1"
                    title="Drafts"
                    data-toggle="tab"
                    data-target="#drafts"
                  >
                    <span className="icon icon-pencil fa fa-fw fa-edit mr-md-1" />
                    <span className="d-none d-md-inline">Drafts</span>
                  </a>
                  <a
                    href=""
                    className="nav-link text-muted px-md-1"
                    title="Calendar"
                    data-toggle="tab"
                    data-target="#calendar"
                  >
                    <span className="icon icon-calendar fa fa-calendar fa-fw mr-md-1" />
                    <span className="d-none d-md-inline">Calendar</span>
                  </a>
                </div>
                <div className="d-md-block d-none">
                  <hr />
                  <AboutHtml />
                </div>
              </ul>
            </div>
            <div className="col-md py-3 tab-content">
              <div id="messages" className="tab-pane active">
                <div className="d-flex flex-sm-row flex-column py-1 mb-1">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-secondary text-uppercase"
                      onClick={parent.toggleMarkAll}
                    >
                      <div
                        className="custom-control custom-checkbox"
                        onClick={parent.toggleMarkAll}
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkAll"
                          defaultChecked={false}
                          onChange={parent.toggleMarkAll}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkAll"
                        >
                          Mark
                        </label>
                      </div>
                    </button>
                    {parent.state.messages &&
                    parent.state.messages.filter((v, k) => {
                      if (v.marked === 1) {
                        return v;
                      }
                    }).length > 0 ? (
                      <div className="btn-group mr-sm-auto mr-none">
                        <button
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle text-uppercase"
                          data-toggle="dropdown"
                        />
                        <div className="dropdown-menu" id="dd1">
                          <a
                            href
                            className="dropdown-item"
                            onClick={parent.deleteMarked}
                          >
                            Delete marked items
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mx-sm-1 mx-none"
                    onClick={parent.refreshMessages}
                  >
                    <i className="align-middle icon-refresh fas fa-sync" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary mr-sm-1 mr-none"
                    data-target="#composeModal"
                    data-toggle="modal"
                  >
                    <i className="align-middle icon-pencil fa fa-edit" />
                  </button>
                </div>
                {/* message list */}
                <ul className="list-group py-2">
                  {parent.state.messages && parent.state.messages.length > 0
                    ? parent.state.messages.map((item, idx) => (
                        <li
                          key={idx}
                          className="list-group-item list-group-item-action d-block py-1"
                        >
                          <summary className="row">
                            <div className="col py-2 order-1">
                              <div
                                onClick={() => parent.toggleMark(idx)}
                                className="custom-control custom-checkbox"
                              >
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  name={"check" + idx}
                                  checked={item.marked === 1}
                                />
                                <label
                                  className="custom-control-label text-nowrap"
                                  htmlFor={"check" + idx}
                                >
                                  <a
                                    title="send mail"
                                    href={"mailto:" + item.fromAddress}
                                  >
                                    {item.from}{" "}
                                    <span className="icon icon-envelope far fa-fw fa-envelope mr-md-1" />
                                  </a>
                                </label>
                              </div>
                            </div>
                            <div className="col-auto px-0 order-last order-sm-2 d-none d-sm-block align-self-center text-right">
                              <a
                                href={true}
                                className="text-secondary px-md-1"
                                title="Deleted"
                                onClick={() => parent.doDelete(idx)}
                              >
                                <span className="icon icon-trash fa fa-fw fa-trash" />
                              </a>
                            </div>
                            <div className="col-sm-12 col-10 py-2 order-3">
                              <div className="float-right text-right">
                                <span
                                  className={
                                    " d-none d-sm-block " +
                                    (!item.read ? "font-weight-bold" : "")
                                  }
                                >
                                  {item.dtSent}
                                </span>
                              </div>
                              <p className="lead mb-0">
                                <a
                                  href={true}
                                  title={
                                    !item.read
                                      ? "This is a new message"
                                      : "View this message"
                                  }
                                  onClick={() => parent.doShow(idx)}
                                >
                                  {item.subject}
                                </a>
                                {item.attachment ? (
                                  <i className="align-middle icon-paper-clip" />
                                ) : null}
                              </p>
                            </div>
                          </summary>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div id="deleted" className="tab-pane">
                {/* deleted items */}
                <h5>Deleted items({parent.state.deleted.length})</h5>
                <div className="row">
                  {parent.state.deleted && parent.state.deleted.length > 0
                    ? parent.state.deleted.map((item, idx) => (
                        <div className="col-12" key={idx}>
                          <a href="">
                            {item.from} ({item.fromAddress})
                            <span className="px-2">
                              {item.subject.substring(0, 20)}...
                            </span>
                          </a>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div id="drafts" className="tab-pane">
                <h5>Drafts</h5>
                <p>Not implemented..</p>
              </div>
              <div id="calendar" className="tab-pane">
                <h5>Calendar</h5>
                <p>Not implemented..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InboxHtml;

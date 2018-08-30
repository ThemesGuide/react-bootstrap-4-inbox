import React from "react";

export const AboutHtml = () => {
  return (
    <div>
      <h6>App Features</h6>
      <div className="small d-flex flex-column">
        <span>Inbox loads data from json</span>
        <span>Open message in modal</span>
        <span>Compose message modal</span>
        <span>Mark items as "read"</span>
        <span>Mark items as "deleted"</span>
        <span>Mark single items or toggle all</span>
        <span>View deleted items</span>
      </div>
    </div>
  );
};

export default AboutHtml;

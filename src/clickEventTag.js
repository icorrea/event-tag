import "./libs/prototypes";

const clickEventTag = (e) => {
  if (!e.target.dataset.isEmpty()) {
    window.dataLayer.push({
      event: "genericEvent",
      eventCategory: e.target.dataset.category,
      eventAction: e.target.dataset.action,
      eventLabel: e.target.dataset.label,
    });
  }
};

export { clickEventTag }
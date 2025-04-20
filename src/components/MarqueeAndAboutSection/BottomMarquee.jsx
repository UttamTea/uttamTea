import React from "react";

const BottomMarquee = () => {
  // Improved content structure with spans for better styling control
  const marqueeItems = [
    { icon: "💝", text: "50,00 Happy Customers" },
    { icon: "💝", text: "80+ years" },
    { icon: "💝", text: "50,00 Happy Customers" },
    { icon: "💝", text: "80+ years" },
    { icon: "💝", text: "50,00 Happy Customers" },
    { icon: "💝", text: "80+ years" },
  ];

  // Create styled content with proper spacing
  const createMarqueeContent = () => {
    return marqueeItems.map((item, index) => (
      <span key={index} className="marquee-item_bottom">
        <span className="marquee-icon_bottom">{item.icon}</span>
        <span className="marquee-text_bottom">{item.text}</span>
      </span>
    ));
  };

  // Repeat the content multiple times to ensure full screen coverage
  const renderDuplicatedContent = () => {
    // Create 5 sets of the content to ensure coverage
    return Array(5)
      .fill(null)
      .map((_, index) => (
        <React.Fragment key={index}>{createMarqueeContent()}</React.Fragment>
      ));
  };

  return (
    <div className="marquee-container_bottom">
      <div className="marquee-content_bottom">{renderDuplicatedContent()}</div>
      {/* Duplicate for seamless infinite scroll */}
      <div className="marquee-content_bottom" aria-hidden="true">
        {renderDuplicatedContent()}
      </div>
    </div>
  );
};

export default BottomMarquee;

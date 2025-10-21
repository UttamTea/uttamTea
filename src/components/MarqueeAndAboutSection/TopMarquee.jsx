import React from "react";
import PACKAGE_ICON from "../../assets/icons/package.svg";

const TopMarquee = () => {
  // Improved content structure with spans for better styling control
  const marqueeItems = [
    { icon: PACKAGE_ICON, text: "Trusted by Millions Tea Lovers Across India..." },
    { icon: PACKAGE_ICON, text: "Trusted by Millions Tea Lovers Across India..." },
    { icon: PACKAGE_ICON, text: "Trusted by Millions Tea Lovers Across India..." },
  ];

  // Create styled content with proper spacing
  const createMarqueeContent = () => {
    return marqueeItems.map((item, index) => (
      <span key={index} className="marquee-item">
        <span className="marquee-icon">
        </span>
        <span className="marquee-text">{item.text}</span>
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
    <div className="marquee-container">
      <div className="marquee-content">{renderDuplicatedContent()}</div>
      {/* Duplicate for seamless infinite scroll */}
      <div className="marquee-content" aria-hidden="true">
        {renderDuplicatedContent()}
      </div>
    </div>
  );
};

export default TopMarquee;

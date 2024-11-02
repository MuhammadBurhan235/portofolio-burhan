// SidebarLContent.tsx
import React from "react";
import { Button, Nav } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

interface SidebarLContentProps {
  sidebarLData: string[];
  handleClose: () => void;
  handleCategoryClick: (category: string) => void;
}

const SidebarLContent: React.FC<SidebarLContentProps> = ({
  sidebarLData,
  handleClose,
  handleCategoryClick,
}) => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="link" onClick={handleClose}>
          <FaTimes />
        </Button>
      </div>
      <Nav className="flex-column">
        {sidebarLData.map((item, index) => (
          <Nav.Link
            key={index}
            href="#item"
            className="text-dark"
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </Nav.Link>
        ))}
      </Nav>
    </>
  );
};

export default SidebarLContent;

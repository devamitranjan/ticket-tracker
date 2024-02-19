import React from "react";
import styled from "styled-components";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from "@mui/icons-material/Image";

interface ToolbarPluginProps extends React.HTMLAttributes<HTMLDivElement> {}

const icons = [
  {
    id: "bold",
    preview: "Bold",
    icon: FormatBoldIcon,
  },
  {
    id: "italic",
    preview: "Italic",
    icon: FormatItalicIcon,
  },
  {
    id: "underline",
    preview: "Underline",
    icon: FormatUnderlinedIcon,
  },
  {
    id: "strike-through",
    preview: "Strike Through",
    icon: StrikethroughSIcon,
  },
  {
    id: "insert-link",
    preview: "Insert Link",
    icon: InsertLinkIcon,
  },
  {
    id: "align-left",
    preview: "Align Left",
    icon: FormatAlignLeftIcon,
  },
  {
    id: "align-center",
    preview: "Align Center",
    icon: FormatAlignJustifyIcon,
  },
  {
    id: "align-right",
    preview: "Align Right",
    icon: FormatAlignRightIcon,
  },
  {
    id: "quote",
    preview: "Quote",
    icon: FormatQuoteIcon,
  },
  {
    id: "list",
    preview: "Unordered List",
    icon: FormatListBulletedIcon,
  },
  {
    id: "list-numbered",
    preview: "Ordered List",
    icon: FormatListNumberedIcon,
  },
  {
    id: "code",
    preview: "Code",
    icon: CodeIcon,
  },
  {
    id: "image",
    preview: "Image",
    icon: ImageIcon,
  },
  {
    id: "undo",
    preview: "Undo",
    icon: UndoIcon,
  },
  {
    id: "redo",
    preview: "Redo",
    icon: RedoIcon,
  },
];

const ToolbarPlugin: React.FC<ToolbarPluginProps> = () => {
  return (
    <ToolbarPluginContainer>
      {icons.map((icon) => {
        const Icon = icon.icon;
        return <Icon key={icon.id} />;
      })}
    </ToolbarPluginContainer>
  );
};

const ToolbarPluginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 2px solid #d5d2d2;
  border-bottom: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export default ToolbarPlugin;

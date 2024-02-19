import { $getRoot, $getSelection } from "lexical";
import { useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import styled from "styled-components";
import ToolbarPlugin from "./plugin/ToolbarPlugin";

const theme = {
  // Theme styling goes here
};

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error: Error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  return (
    <EditorContainer>
      <ToolbarPlugin />
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<Placeholder>Ready to add new entry..</Placeholder>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
      </LexicalComposer>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  color: #000;
  line-height: 1.7;
  font-weight: 400;
  background: #fff;
  position: relative;
  display: block;
`;

const ContentEditable = styled(LexicalContentEditable)`
  border: 2px solid #d5d2d2;
  font-size: 15px;
  display: block;
  position: relative;
  outline: 0;
  padding: 0 1.75rem 2.5rem;
  min-height: 10rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Placeholder = styled.div`
  font-size: 15px;
  color: #999;
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  top: 3.75rem;
  left: 28px;
  right: 28px;
  user-select: none;
  white-space: nowrap;
  display: inline-block;
  pointer-events: none;
`;
export default Editor;

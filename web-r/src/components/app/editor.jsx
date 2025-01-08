import PropTypes from 'prop-types';
import { Editor } from "@monaco-editor/react";
import { useTheme } from "@/hooks/use-theme";

export function EditorComponent({ value, setValue, language, editorRef }){
  const { theme } = useTheme();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }
  return(
    <>
      <Editor
        className="rounded-md break-words whitespace-pre-wrap"
        height="calc(100vh - 175px)"
        theme={(theme === "dark" || theme === "system") ? "vs-dark" : "light"}
        onMount={onMount}
        value={value}
        onChange={(value) => {
          setValue(value)
          localStorage.setItem(language, value);
        }}
        language={language}
      />
    </>
  )
}

EditorComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  editorRef: PropTypes.object.isRequired,
};
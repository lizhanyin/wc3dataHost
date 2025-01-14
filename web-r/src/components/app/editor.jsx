import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { Editor } from "@monaco-editor/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { CodeRunner, LanguageSelect } from "@/components/app";
import { supportedLanguages } from "@/utils/monaco-supported-languages";
import { fetchRuntimes } from "@/utils/fetch-runtimes";
import { codeSnippets } from "@/utils/hello-world";
import { useTheme } from "@/hooks/use-theme";

export function EditorComponent(){
  const { theme } = useTheme();
  
  const editorRef = useRef();
  const [ value, setValue ] = useState("");
  const [ language, setLanguage ] = useState(localStorage.getItem("language") || "javascript");
  const [ languageList, setLanguageList ] = useState([]);
  
  useEffect(() => {
    fetchRuntimes(supportedLanguages, setLanguageList);
  }, []);

  const onMount = (editor) => {
    editor.focus();
  }

  return(
    <>
      <section className="w-full my-2 flex justify-between items-center gap-1">
        <LanguageSelect language={language} setLanguage={setLanguage} languageList={languageList} setValue={setValue} codeSnippets={codeSnippets} />
      </section>
      <Tabs defaultValue="editor" className="w-full">
        <TabsList>
          <TabsTrigger value="editor" className="bg-blue-ghost">Editor</TabsTrigger>
          <TabsTrigger value="output" className="bg-blue-ghost">Run Code</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <Editor
            ref={editorRef}
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
        </TabsContent>
        <TabsContent value="output">
          <CodeRunner data={value} language={language} version={languageList.find(x => x.language === language)?.version || ""} />
        </TabsContent>
      </Tabs>

    </>
  )
}

EditorComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  editorRef: PropTypes.object.isRequired,
};
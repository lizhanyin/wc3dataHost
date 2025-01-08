import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
// import { fontSans } from "@/lib/fonts"

import { CodeRunner, EditorComponent, LanguageSelect } from "@/components/app";
import { Container, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { supportedLanguages } from "@/utils/monaco-supported-languages";
import { codeSnippets } from "@/utils/hello-world";
import { fetchRuntimes } from "@/utils/fetch-runtimes";

export function RootLayout() {

  const editorRef = useRef();
  const [ value, setValue ] = useState("");
  
  const [ language, setLanguage ] = useState(localStorage.getItem("language") || "javascript");
  
  const [ languageList, setLanguageList ] = useState([]);
  
  useEffect(() => {
    fetchRuntimes(supportedLanguages, setLanguageList);
  }, []);

  return (
    <Container className="flex-col flex-1">
      <section className="w-full my-2 flex justify-between items-center gap-1">
        <LanguageSelect language={language} setLanguage={setLanguage} languageList={languageList} setValue={setValue} codeSnippets={codeSnippets} />
      </section>
      <Tabs defaultValue="editor" className="w-full">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="output">Run Code</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <EditorComponent value={value} setValue={setValue} editorRef={editorRef} language={language}/>
        </TabsContent>
        <TabsContent value="output">
          <CodeRunner data={value} language={language} version={languageList.find(x => x.language === language)?.version || ""} />
        </TabsContent>
      </Tabs>
    </Container>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
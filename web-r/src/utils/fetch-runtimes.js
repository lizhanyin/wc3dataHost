import axios from "axios";

export const fetchRuntimes = async (supportedLanguages, setData) => {
  const res = await axios.get("https://emkc.org/api/v2/piston/runtimes");
  const data = res.data;
  let result = data.map(x => {
    const supported = supportedLanguages.includes(x.language.toLowerCase()) || x.aliases.find(q => supportedLanguages.includes(q.toLowerCase()));
    if (supported) {
      if(x.version === "1.32.3") return null;
      return {
        language: x.language,
        version: x.version
      }
    } else return null;
  }).filter(x => x != null);
  setData(result);
}

export const codeSnippets = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};
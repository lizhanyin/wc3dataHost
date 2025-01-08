import { useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

export function LanguageSelect({ language, setLanguage, languageList, setValue, codeSnippets }) {
  useEffect(() => {
    if(language){
      setValue(localStorage.getItem(language) || codeSnippets[language] || "");
    }
  }, [language]);
  return (
    <Select defaultValue={language} onValueChange={(value) => {
      setLanguage(value)
      localStorage.setItem("language", value);
    }}>
      <SelectTrigger>
        <SelectValue placeholder={language.toUpperCase() || "JAVASCRIPT"}/>
      </SelectTrigger>
      <SelectContent>
    {languageList.map((x, i) => 
        <SelectItem key={i} value={x.language} >{x.language.toUpperCase()} {x.version}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}

LanguageSelect.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  languageList: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  })).isRequired,
  setValue: PropTypes.func.isRequired,
  codeSnippets: PropTypes.object.isRequired,
};
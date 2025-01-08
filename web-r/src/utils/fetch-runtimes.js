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
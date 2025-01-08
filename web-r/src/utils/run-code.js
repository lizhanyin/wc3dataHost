import axios from "axios";

export const runCode = async (language, version, content, setData) => {
  try{
    const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
      language,
      version,
      files: [{
        content,
      }]
    });
    const data = res.data;
    setData(data.run);
  } catch(err) {
    console.log(err.message);
    return {
      error: true,
      content: err.message
    }
  }
}
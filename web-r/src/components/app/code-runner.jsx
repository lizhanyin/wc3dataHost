import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { runCode } from "@/utils/run-code";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CodeRunner({ language, version, data }){
  const [ error, setError ] = useState(false);
  const [ result, setResult ] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    if(language&&version&&data){
      runCode(language, version, data, setResult);
    }
  }, []);
  
  useEffect(() => {
    if(result.error){
      toast({
        variant: "destructive",
        description: result.content
      });
    } else if (result.stderr){
      setError(true);
    }
  }, [result]);
  
  return(
    // className="min-h-[85vh]"
    <Card style={{height: "calc(100vh - 175px)"}}>
      <CardHeader>
        <CardTitle>{language.toUpperCase()}</CardTitle>
        <CardDescription>Code Output</CardDescription>
      </CardHeader>
      <CardContent className="overflow-hidden overflow-y-scroll scrollbar h-full">
        {result ? error ? <div className="text-md text-red-700 font-bold font-mono break-words  whitespace-pre-wrap">{result.output}</div> : <div className="text-md font-bold font-mono break-words  whitespace-pre-wrap">{result.output}</div> : <p className="text-md font-bold animate-pulse text-green-500">Executing...</p>}
      </CardContent>
      <CardFooter>
        <p>Version: {version}</p>
      </CardFooter>
    </Card>
  )
}

CodeRunner.propTypes = {
  language: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
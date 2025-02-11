
import { pathHash } from "@/utils";

const fileId = (name, imExt) => {
  if (typeof name === "string") {
    return pathHash(name, imExt);
  } else if (name != null && typeof name[0] === "number") {
    return name;
  } else {
    return null;
  }
};

export { fileId }
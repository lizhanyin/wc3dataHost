import { postProcess } from "@/utils";
class BaseData {
  constructor(cache, build, name) {
    this.cache = cache;
    this.id = build;
    this.name = name;
    this.core = true;
  }

  objects() {
    return this.cache.fetch(`/api/${this.id}.json`, {
      global: true,
      process: postProcess,
    });
  }

  listFile() {
    return this.cache.fetch(`/api/rootlist.txt`, {
      global: true,
      type: "text",
    });
  }

  hasFile() {
    return false;
  }

  file() {
    return null;
  }
  binary() {
    return null;
  }
  image(name) {
    return this.cache.image(name);
  }

  jass() {
    return null;
  }

  icon(id) {
    return this.cache.icon(id);
  }
  iconByName(name) {
    return this.cache.iconByName(name);
  }
}

export { BaseData }
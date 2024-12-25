import BinaryStream from '../../../common/binarystream';
import War3MapW3u from '../w3u/file';
import War3MapW3d from '../w3d/file';

/**
 * war3map.w3o - the combined modification file.
 *
 * Contains all of the modifications of a map.
 * Can be exported and imported via the World Editor.
 */
export default class War3MapW3o {
  /**
   * @param {?ArrayBuffer} buffer
   */
  constructor(buffer) {
    /** @member {number} */
    this.version = 0;
    /** @member {?War3MapW3u} */
    this.units = null;
    /** @member {?War3MapW3u} */
    this.items = null;
    /** @member {?War3MapW3u} */
    this.destructables = null;
    /** @member {?War3MapW3d} */
    this.doodads = null;
    /** @member {?War3MapW3d} */
    this.abilities = null;
    /** @member {?War3MapW3u} */
    this.buffs = null;
    /** @member {?War3MapW3d} */
    this.upgrades = null;

    if (buffer) {
      this.load(buffer);
    }
  }

  /**
   * @param {ArrayBuffer} buffer
   */
  load(buffer) {
    let stream = new BinaryStream(buffer);

    this.version = stream.readInt32();

    if (stream.readInt32()) {
      this.units = new War3MapW3u(stream);
    }

    if (stream.readInt32()) {
      this.items = new War3MapW3u(stream);
    }

    if (stream.readInt32()) {
      this.destructables = new War3MapW3u(stream);
    }

    if (stream.readInt32()) {
      this.doodads = new War3MapW3d(stream);
    }

    if (stream.readInt32()) {
      this.abilities = new War3MapW3d(stream);
    }

    if (stream.readInt32()) {
      this.buffs = new War3MapW3u(stream);
    }

    if (stream.readInt32()) {
      this.upgrades = new War3MapW3d(stream);
    }
  }

  /**
   * @return {ArrayBuffer}
   */
  save() {
    let buffer = new ArrayBuffer(this.getByteLength());
    let stream = new BinaryStream(buffer);

    stream.writeInt32(this.version);

    if (this.units) {
      stream.writeInt32(1);
      this.units.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.items) {
      stream.writeInt32(1);
      this.items.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.destructables) {
      stream.writeInt32(1);
      this.destructables.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.doodads) {
      stream.writeInt32(1);
      this.doodads.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.abilities) {
      stream.writeInt32(1);
      this.abilities.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.buffs) {
      stream.writeInt32(1);
      this.buffs.save(stream);
    } else {
      stream.writeInt32(0);
    }

    if (this.upgrades) {
      stream.writeInt32(1);
      this.upgrades.save(stream);
    } else {
      stream.writeInt32(0);
    }

    return buffer;
  }

  /**
   * @return {number}
   */
  getByteLength() {
    let size = 32;

    if (this.units) {
      size += this.units.getByteLength();
    }

    if (this.items) {
      size += this.items.getByteLength();
    }

    if (this.destructables) {
      size += this.destructables.getByteLength();
    }

    if (this.doodads) {
      size += this.doodads.getByteLength();
    }

    if (this.abilities) {
      size += this.abilities.getByteLength();
    }

    if (this.buffs) {
      size += this.buffs.getByteLength();
    }

    if (this.upgrades) {
      size += this.upgrades.getByteLength();
    }

    return size;
  }
}

/**
 * A SLK table file.
 */
export default class SlkFile {
  /**
   * @param {?string} buffer
   */
  constructor(buffer) {
    /** @member {Array<Array<string>>} */
    this.rows = [];

    if (buffer) {
      this.load(buffer);
    }
  }

  /**
   * @param {string} buffer
   */
  load(buffer) {
    if (!buffer.startsWith('ID')) {
      throw new Error('WrongMagicNumber');
    }

    let rows = this.rows;
    let x = 0;
    let y = 0;

    for (let line of buffer.split('\n')) {
      // The B command is supposed to define the total number of columns and rows, however in UbetSplatData.slk it gives wrong information
      // Therefore, just ignore it, since JavaScript arrays grow as they want either way
      if (line[0] !== 'B') {
        for (let token of line.split(';')) {
          let op = token[0];
          let valueString = token.substring(1).trim();
          let value;

          if (op === 'X') {
            x = parseInt(valueString, 10) - 1;
          } else if (op === 'Y') {
            y = parseInt(valueString, 10) - 1;
          } else if (op === 'K') {
            if (!rows[y]) {
              rows[y] = [];
            }

            if (valueString[0] === '"') {
              value = valueString.substring(1, valueString.length - 1);
            } else if (valueString === 'TRUE') {
              value = true;
            } else if (valueString === 'FALSE') {
              value = false;
            } else {
              value = parseFloat(valueString);
            }

            rows[y][x] = value;
          } else if (op === 'A') {
            if (!this.comments) {
              this.comments = [];
            }
            if (!this.comments[y]) {
              this.comments[y] = [];
            }
            this.comments[y][x] = valueString;
          }
        }
      }
    }

    this.cols = this.rows.reduce((m, r) => Math.max(m, r.length), 0);
  }
}
